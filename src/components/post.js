import React from "react"

import { Link } from "gatsby"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"


const Post = props => {

  const Aritcle = styled.article`
    border-radius: 0.2rem;
    border: solid 0.1rem #8080805c;
    box-shadow: 0.1rem 0.1rem 0.2rem #8080805c;
    h3 {
      text-align: center;
    }

  `
  
  return (
  <Aritcle key={props.node.fields.slug}>
    <h3>
      <Link to={props.node.fields.slug}>
        {props.title}
      </Link>
    </h3>
    <div css={css`padding:0.2rem 2rem;`}>
      <p
        dangerouslySetInnerHTML={{
          __html: props.node.frontmatter.description || props.node.excerpt,
        }}
        />
      <small css={css`display: flex; font-size: 1.3rem;`}>
        <p css={css`padding: 0.4rem;`}>{props.node.frontmatter.date}</p>
        {
          props.node.frontmatter.tags.map(tag => {
            return <p css={css`margin: auto 0.2rem; padding: 0.2rem; border-radius: 0.6rem; border: solid 0.1rem #8080805c;`}>{tag}</p>
          })
        }
      </small>
    </div>
  </Aritcle>
)
}

export default Post