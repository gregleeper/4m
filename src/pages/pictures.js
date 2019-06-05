import React from "react"
import Gallery from "../components/gallery"
import Layout from "../components/layout"

const Pictures = props => (
  <Layout location={props.location}>
    <Gallery />
  </Layout>
)

export default Pictures
