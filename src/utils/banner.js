import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1 className="myTitle"> {title} </h1>{" "}
      <h1 className="mySubtitle"> {subtitle} </h1> {children}{" "}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  color: #fff;
  .myTitle {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    background: rgba(128, 0, 0, 0.7);
    ${styles.letterSpacing({ spacing: "0.35rem" })};
    border-style: solid;
    border-width: thick;
    padding: 1rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .mySubtitle {
    ${styles.textSlanted};
    font-size: 1.25rem;
    font-weight: bold;
    background: rgba(128, 0, 0, 0.7);
    font-weight: bold;
    padding: 1rem;
    margin-left: 4rem;
    margin-right: 4rem;
  }
  @media (min-width: 768px) {
    .myTitle {
      font-size: 2rem;
    }
    .mySubtitle {
      margin-left: 10rem;
      margin-right: 10rem;
    }
  }
`

Banner.defaultProps = {
  title: "Default Title",
  subtitle: "Default subtitle",
}

export default Banner
