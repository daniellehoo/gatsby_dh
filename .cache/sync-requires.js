const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/daniellehoo/Desktop/desktop/recurse/gatsby/blog/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/daniellehoo/Desktop/desktop/recurse/gatsby/blog/src/pages/index.js"))),
  "component---src-templates-blog-archive-js": hot(preferDefault(require("/Users/daniellehoo/Desktop/desktop/recurse/gatsby/blog/src/templates/blog-archive.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/daniellehoo/Desktop/desktop/recurse/gatsby/blog/src/templates/blog-post.js")))
}

