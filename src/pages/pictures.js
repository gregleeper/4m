import React from "react"
import RanchGallery from "../components/ranchGallery"
import Layout from "../components/layout"
import styled from "styled-components"
import PrivacyGallery from "../components/privacyGallery"
import RailingsGallery from "../components/railingsGallery"

const Pictures = props => (
  <Layout location={props.location}>
    <Header>Ranch/Farm</Header>
    <Helper>
      Tap or click pictures to englarge. Rotate phone to landscape for larger
      image sizes.
    </Helper>
    <RanchGallery />
    <Header>Privacy</Header>
    <PrivacyGallery />
    <Header>Railings</Header>
    <RailingsGallery />
  </Layout>
)

const Header = styled.h2`
  color: maroon;
  margin-top: 2rem;
  text-align: center;
`

const Helper = styled.p`
  color: maroon;
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.9rem;
`

export default Pictures
