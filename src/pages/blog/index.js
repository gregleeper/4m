import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../../components/layout"
import styled from "styled-components"

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <Layout>
      <div className="container mt-4" style={{ paddingBottom: "20%" }}>
        <h1>Blog</h1>

        {data.allMarkdownRemark.edges.map(post => (
          <div className="card">
            <div className="card-body">
              <MyLink to={`/posts/${post.node.fields.slug}`}>
                <h4>{post.node.frontmatter.title}</h4>
              </MyLink>

              <p>{post.node.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

const MyLink = styled(Link)`
  text-decoration: none;
  color: maroon;
  :hover {
    text-decoration: none;
    color: black;
  }
`

export default BlogIndex
