const { HtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Rewrites root-absolute URLs (/assets/..., /tour/, ...) to respect the
  // configured pathPrefix. Lets the same source deploy at a domain root
  // (default pathPrefix "/") or under a GitHub Pages project path
  // (--pathprefix=/Ecocruceros-Lima/) without hand-editing any links.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Passthrough static assets unchanged
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/root": "/" }); // robots.txt, favicon, etc.

  // --- Filters ---
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Build a wa.me link with a pre-filled, URL-encoded message
  eleventyConfig.addFilter("wa", function (message) {
    const number = "51986671093"; // confirmed sole booking number
    const text = message ? "?text=" + encodeURIComponent(message) : "";
    return `https://wa.me/${number}${text}`;
  });

  // Pick the equivalent URL in the other language (mirror structure)
  eleventyConfig.addFilter("altLang", function (url) {
    if (!url) return "/";
    if (url.startsWith("/en/")) return url.replace(/^\/en\//, "/");
    if (url === "/en/") return "/";
    return "/en" + url;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
