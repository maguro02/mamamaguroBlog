import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

import Image from "gatsby"

import HeaderImage from "../../content/assets/header.png"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let isRoot = location.pathname === rootPath
  let header

  const Header = styled.div`
    display: flex;
    min-height: 60vh;
    background-image: url(${HeaderImage});
    background-size: cover;
    align-items: center;
    justify-content: center;
  `

  if (isRoot) {
    header = (
      <Header>
        <div>
          <h1 css={css`margin-top: 0; margin-bottom: 0; font-size: 5rem; color: #f5f5f5;`}>
            <Link
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </div>
      </Header>
    )
  } else {
    header = ""
  }


  return (
    <div>
      <Global styles={css`
        html {
          font-size: 62.5%;
        }
        body {
          font-size: 1.3rem;
        }
        h1, h2, h3, h4, h5, h6 {
          a {
            color: inherit;
            :hover{box-shadow: none;}
          }
        }
        `}
      />
      {header}
      {children}
      <footer>
        © {new Date().getFullYear()} Mamamaguro
      </footer>
    </div>
  )
}

export default Layout
