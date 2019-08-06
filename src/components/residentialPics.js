import React from "react"
import Lightbox from "./lightbox"
import { useStaticQuery, graphql } from "gatsby"

const ResidentialHugoton = () => {
  const images = useStaticQuery(graphql`
    query {
      myImages: allFile(
        filter: { name: { regex: "/Residential/" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 2000, quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Lightbox fluid={images.myImages.edges} />
    </>
  )
}

export default ResidentialHugoton
