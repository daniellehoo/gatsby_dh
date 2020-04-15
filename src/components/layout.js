import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import icon from "../images/cat_icon.png"
import { CullFaceNone, RectAreaLight } from "three"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: `3rem`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              fontFamily: `Manrope, sans-serif`,
              boxShadow: `none`,
              // textDecoration: `none`,
              color: `inherit`,
            }}
            to={`daniellehoo.com`}
          >
            {title}
          </Link>
        </h1>
      </div>
    )
  } else {
    header = (
      <div style={{
            marginTop: 0,
            display: `flex`,
            justifyContent: `space-between`,

          }}
            >
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              fontFamily: `Manrope, sans-serif`,
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`http://www.daniellehoo.com`}
          >
            {title}
          </Link>
        </h3>
        <a
          href={`http://daniellehoo.com`}
          style={{
            width: `10%`,
            textDecoration: `none !important`,
          }}
        >
          <img
            src={icon}
            style={{
              margin: 0,
            }}
          />
        </a>
      </div>
    )
  }
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <body
      style={{
       fontFamily: `Manrope, sans-serif`,
                     textDecoration: `none`,


      }}>
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{
        margin: `2rem auto 0`,
        textAlign: `center`,
        fontWeight: 600,
      }}>
        © Danielle Hoo {new Date().getFullYear()}
      </footer>

      </body>
    </div>
  )
}

export default Layout
