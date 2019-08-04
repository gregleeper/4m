import React from "react"
import Lightbox from "./lightbox"
import { useStaticQuery, graphql } from "gatsby"

const CommercialPics = () => {
  const images = useStaticQuery(graphql`
    query {
      myImages: allFile(
        filter: { name: { regex: "/Commercial/" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
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

export default CommercialPics
