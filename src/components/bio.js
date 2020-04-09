/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/my-icon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)
  
  const Wrapper = styled.div`
    display: flex;
    color: #F5F5F5;
    align-items: center;
    justify-content: center;
  `

  const { author, social } = data.site.siteMetadata
  return (
    <Wrapper>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p css={css`margin-left: 1rem;`}>
        <strong>{author.name}</strong> {author.summary}
        {` `}
      </p>
    </Wrapper>
  )
}

export default Bio
