module.exports = {
  plugins: [
    // "preset-lint-consistent", // Check that markdown is consistent.
    // "preset-lint-recommended", // Few recommended rules.
    // "preset-lint-markdown-style-guide", // Markdown style guide.
    // "preset-prettier",
    // `remark-lint-list-item-indent` is configured with `tab-size` in the
    // recommended preset, but if we’d prefer something else, it can be
    // reconfigured:
    // [
    //   "remark-lint-list-item-indent",
    //   "space"
    // ]
    'frontmatter',
    ['remark-lint-first-heading-level', 2],
    ['remark-lint-no-multiple-toplevel-headings', 0]
  ],
}
