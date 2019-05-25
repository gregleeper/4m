import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Banner from "./banner"

const BackgroundSection = ({
  objFit = `cover`,
  objPosition = `50% 50%`,
  children,
  className,
  ...props
}) => (
  <StaticQuery
    query={graphql`
      query {
        header: file(relativePath: { eq: "steel-fence-full.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1800) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.header.childImageSharp.fluid

      return (
        <StyledWrapper>
          <BackgroundImage
            Tag="div"
            className={className}
            fluid={imageData}
            classId="gbi"
          >
            {children}
            <Banner
              title="4M Fencing"
              subtitle="Don't call the rest when you can have the best!"
            />
          </BackgroundImage>
        </StyledWrapper>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  min-height: calc(70vh - 52px);
  background-repeat: repeat-y !important;

  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.7)
  ) !important;
  .gatsby-background-image-gbi:before {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1)) !important;
  }
  .gatsby-background-image-gbi:after {
    background-repeat: repeat-y !important;
    background-position: center;
    background-size: cover;
    position: relative;
  }
`

const StyledWrapper = styled.div`
  .gatsby-background-image-gbi:before {
    background-repeat: repeat-y !important;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    opacity: 0.4;
  }
`

export default StyledBackgroundSection
