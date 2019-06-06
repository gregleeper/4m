import React from "react"
import RanchGallery from "../components/ranchGallery"
import Layout from "../components/layout"
import styled from "styled-components"
import PrivacyGallery from "../components/privacyGallery"
import RailingsGallery from "../components/railingsGallery"

const Pictures = props => (
  <Layout location={props.location}>
    <Header>Ranch/Farm</Header>
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

export default Pictures
