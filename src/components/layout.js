import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.0),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            fontFamily: `Manrope, sans-serif`,
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            fontFamily: `Manrope, sans-serif`,
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
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
