import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

import Image from "gatsby"

import Bio from "./bio"
import HeaderImage from "../../content/assets/header.png"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let isRoot = location.pathname === rootPath
  let header

  const Header = styled.div`
    position: relative;
    display: flex;
    min-height: 60vh;
    background-image: url(${HeaderImage});
    background-size: cover;
    align-items: center;
    justify-content: center;
    z-index: 0;
    :before {
      content: '';
      background: inherit;
      filter: blur(0.3rem);
      position: absolute;
      top: 0rem;
      left: 0rem;
      right: 0rem;
      bottom: 0rem;
      z-index: -1;
    }
  `

  const Title = styled.div`
    position: relative;
    padding: 3rem;
    z-index: 0;
    :before {
      content: "";
      filter: blur(0.8rem);
      position: absolute;
      top: 0rem;
      left: 0rem;
      right: 0rem;
      bottom: 0rem;
      z-index: -1;
      opacity: 0.4;
      background-color: #222222;
      border-radius: 0.7rem;
    }
  `

  if (isRoot) {
    header = (
      <Header>
        <Title>
          <h1 css={css`margin-top: 0; margin-bottom: 0; font-size: 5rem; color: #f5f5f5;`}>
            <Link
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <Bio />
        </Title>
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
          margin: 0;
          font-size: 1.3rem;
        }
        h1, h2, h3, h4, h5, h6 {
          a {
            color: inherit;
            text-decoration: none;
            box-shadow: none;
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
