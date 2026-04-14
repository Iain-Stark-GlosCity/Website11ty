/**
 * eleventyComputed — global computed data
 *
 * When GCC_TEMPLATE=true (set by the build:gcc workflow), remap every
 * GOV.UK layout reference to its GCC equivalent so pages render with
 * the new design system without touching any frontmatter.
 */
"use strict";

const LAYOUT_MAP = {
  "policy-page.njk":  "gcc/policy-page.njk",
  "landing-page.njk": "gcc/landing-page.njk",
  "article.njk":      "gcc/article.njk",
  "guide.njk":        "gcc/guide.njk",
};

module.exports = {
  layout: (data) => {
    if (process.env.GCC_TEMPLATE !== "true") return data.layout;
    return LAYOUT_MAP[data.layout] || data.layout;
  },
};
