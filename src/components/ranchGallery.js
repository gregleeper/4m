import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const RanchGallery = () => (
  <StaticQuery
    query={graphql`
      query {
        ranch: allFile(filter: { sourceInstanceName: { eq: "ranch" } }) {
          edges {
            node {
              id
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox fluid={data.ranch.edges} />}
  />
)

export default RanchGallery
