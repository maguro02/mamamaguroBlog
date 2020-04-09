import React from "react"
import { Link, graphql } from "gatsby"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-auto-rows: 20rem;
    grid-gap: 4rem;
    padding: 4rem 7rem;
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Posts>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Post key={node.fields.slug} node={node} title={title}/>
          )
        })}
      </Posts>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM/DD")
            title
            description
            tags
          }
        }
      }
    }
  }
`
