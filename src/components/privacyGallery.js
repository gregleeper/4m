import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const PrivacyGallery = () => (
  <StaticQuery
    query={graphql`
      query {
        privacy: allFile(filter: { sourceInstanceName: { eq: "privacy" } }) {
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
    render={data => <Lightbox fluid={data.privacy.edges} />}
  />
)

export default PrivacyGallery
