const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // ── Markdown: preserve HTML comments ──────────────────────────────
  const md = markdownIt({ html: true });

  // Override block HTML renderer to return content verbatim (preserves comments)
  md.renderer.rules.html_block = (tokens, idx) => tokens[idx].content;
  md.renderer.rules.html_inline = (tokens, idx) => tokens[idx].content;

  eleventyConfig.setLibrary("md", md);

  // ── Passthrough copy ───────────────────────────────────────────────
  eleventyConfig.addPassthroughCopy({
    "node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.css":
      "assets/govuk-frontend.min.css",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/govuk-frontend/dist/govuk/assets/fonts": "assets/fonts",
    "node_modules/govuk-frontend/dist/govuk/assets/images": "assets/images",
  });
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/llms.txt");

  // ── Filters ────────────────────────────────────────────────────────

  // YAML parsers silently coerce ISO timestamps to JS Date objects.
  // Normalise before any date operation so both strings and Dates work.
  const toDate = (val) => (val instanceof Date ? val : new Date(val));

  eleventyConfig.addFilter("readableDate", (val) => {
    if (!val) return "";
    return toDate(val).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  });

  // ISO 8601 string for <time datetime="..."> — valid HTML5, handles Date objects.
  eleventyConfig.addFilter("isoDate", (val) => {
    if (!val) return "";
    return toDate(val).toISOString();
  });

  // Consistent short hash: shows prefix + 14 hex chars + ellipsis.
  // Strips the "sha256:" scheme prefix before truncating.
  eleventyConfig.addFilter("shortHash", (hash) => {
    if (!hash) return "";
    const hex = hash.replace(/^sha256:/, "");
    return "sha256:" + hex.slice(0, 14) + "…";
  });

  eleventyConfig.addFilter("readable", (urlPath) => {
    if (!urlPath) return "";
    const parts = urlPath.replace(/^\/|\/$/g, "").split("/");
    const last = parts[parts.length - 1] || parts[parts.length - 2] || "";
    return last
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  });

  eleventyConfig.addFilter("urlencode", (str) => {
    if (!str) return "";
    return encodeURIComponent(str);
  });

  eleventyConfig.addFilter("capitalize", (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  // Returns a date formatted as "yyyy-MM-dd" (or any simple format token).
  // Primarily used by sitemap.xml.njk.
  eleventyConfig.addFilter("dateToFormat", (val, format) => {
    if (!val) return "";
    const d = toDate(val);
    if (format === "yyyy-MM-dd") return d.toISOString().slice(0, 10);
    return d.toISOString();
  });

  // ── Provenance section wrapper ─────────────────────────────────────
  // Converts inline <!-- provenance: {id} --> comments into
  // <section data-provenance="{id}"> wrappers as specified in
  // provenance-format-spec-v0.2.md §"Inline DOM attributes".
  // Applied only where templates explicitly call | prose_with_provenance.
  eleventyConfig.addFilter("prose_with_provenance", (content) => {
    if (!content || !content.includes("<!-- provenance:")) return content;

    // Split on provenance comment markers.
    // String.split with a capture group interleaves [content, id, content, id, ...].
    const segments = content.split(/<!-- provenance: ([^\s>]+) -->/);

    if (segments.length <= 1) return content;

    // segments[0]  = content before the first comment (rendered without a wrapper)
    // segments[1]  = first provenance ID
    // segments[2]  = content belonging to first section
    // segments[3]  = second provenance ID   … etc.
    let result = segments[0];
    for (let i = 1; i < segments.length; i += 2) {
      const id = segments[i];
      const body = segments[i + 1] || "";
      result += `<section data-provenance="${id}">\n${body}</section>\n`;
    }
    return result;
  });

  // ── Publication gate filter ────────────────────────────────────────
  eleventyConfig.addFilter("publishable", (pages) => {
    return (pages || []).filter(
      (p) => !p.data.publication_gates || p.data.publication_gates.can_publish !== false
    );
  });

  // ── Collections ────────────────────────────────────────────────────

  // All pages that pass their publication gate (or have none)
  eleventyConfig.addCollection("publishable", (api) =>
    api.getAll().filter(
      (p) => !p.data.publication_gates || p.data.publication_gates.can_publish !== false
    )
  );

  // Council Tax subset
  eleventyConfig.addCollection("councilTax", (api) =>
    api.getFilteredByTag("council-tax").filter(
      (p) => !p.data.publication_gates || p.data.publication_gates.can_publish !== false
    )
  );

  // All GCC-template pages (used by sitemap.xml.njk)
  eleventyConfig.addCollection("gcc", (api) =>
    api.getFilteredByTag("gcc").filter(
      (p) => !p.data.publication_gates || p.data.publication_gates.can_publish !== false
    )
  );

  // ── Global data ────────────────────────────────────────────────────
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());
  eleventyConfig.addGlobalData("canonical_base", "https://www.gloucester.gov.uk");

  // ── Disable gitignore (src/pages is gitignored but must be processed) ─
  eleventyConfig.setUseGitIgnore(false);

  // ── Input / output ─────────────────────────────────────────────────
  return {
    pathPrefix: process.env.PATHPREFIX || "/",
    dir: {
      input: "src",
      output: process.env.SITE_OUTPUT || "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html", "11ty.js"],
  };
};
