import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const RailingsGallery = () => (
  <StaticQuery
    query={graphql`
      query {
        railings: allFile(filter: { sourceInstanceName: { eq: "railings" } }) {
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
    render={data => <Lightbox fluid={data.railings.edges} />}
  />
)

export default RailingsGallery
