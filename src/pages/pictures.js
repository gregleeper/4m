import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import ResidentialHugoton from "../components/residentialPics"
import CommercialPictures from "../components/commercialPics"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

const Residential = props => (
  <Layout location={props.location}>
    <Tabs
      defaultActiveKey="residential"
      className="justify-content-center mt-3"
    >
      <Tab eventKey="residential" title="Residential">
        <Header>Residential Pictures</Header>
        <Helper>
          Tap or click pictures to englarge. Rotate phone to landscape for
          larger image sizes.
        </Helper>

        <ResidentialHugoton />
      </Tab>
      <Tab eventKey="commercial" title="Commercial">
        <Header>Commercial Pictures</Header>
        <Helper>
          Tap or click pictures to englarge. Rotate phone to landscape for
          larger image sizes.
        </Helper>
        <CommercialPictures />
      </Tab>
    </Tabs>
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

const StyledTab = styled(Tab)`
  color: maroon;
`

export default Residential
