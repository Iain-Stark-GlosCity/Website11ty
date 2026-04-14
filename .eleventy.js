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
    "node_modules/govuk-frontend/dist/govuk/assets": "assets/govuk",
  });
  eleventyConfig.addPassthroughCopy("src/assets");

  // ── Filters ────────────────────────────────────────────────────────
  eleventyConfig.addFilter("readableDate", (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
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

  // ── Publication gate filter ────────────────────────────────────────
  eleventyConfig.addFilter("publishable", (pages) => {
    return (pages || []).filter(
      (p) => p.data.publication_gates && p.data.publication_gates.can_publish !== false
    );
  });

  // ── Collections ────────────────────────────────────────────────────
  eleventyConfig.addCollection("publishable", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("council-tax")
      .filter(
        (p) =>
          p.data.publication_gates &&
          p.data.publication_gates.can_publish !== false
      );
  });

  // ── Global data ────────────────────────────────────────────────────
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());

  // ── Disable gitignore (src/pages is gitignored but must be processed) ─
  eleventyConfig.setUseGitIgnore(false);

  // ── Input / output ─────────────────────────────────────────────────
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html", "11ty.js"],
  };
};
