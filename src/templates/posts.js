import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Posts = (props) => (
  <Layout>
    <h1>Posts</h1>
    {props.data.allWordpressPost.edges.map(({ node }) => (
      <div key={node.slug}>
        <Link to={`/posts/${node.slug}/`} style={{textDecoration:'none'}}>
          <h2 dangerouslySetInnerHTML={{__html:node.title}} />
        </Link>
        <p dangerouslySetInnerHTML={{__html:node.excerpt}} />
      </div>
    ))}
  </Layout>
)

export default Posts

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
