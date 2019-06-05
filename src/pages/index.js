import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Wood from "../components/homePage/Wood"
import Barbed from "../components/homePage/Barbed"
import Steel from "../components/homePage/Steel"

const IndexPage = props => (
  <Layout location={props.location}>
    {console.log(props)}
    <SEO
      title="Home"
      keywords={[
        `fences`,
        `fencing`,
        `southwest Kansas`,
        `Oklahoma panhandle`,
        `steel`,
        `privacy`,
        `wood`,
        `Hugoton`,
        `barbed wire`,
        `barbed`,
      ]}
    />
    <div className="container">
      <div className="row m-4 justify-content-center">
        <h1 style={{ fontFamily: "Brush Script MT", color: "maroon" }}>
          Don't call the rest when you can have the best!
        </h1>{" "}
      </div>
      <div className="row m-4 justify-content-center">
        <h4>Call owner, Tom Mirabal, today for a quote.</h4>
      </div>
      <div className="row mt-4 justify-content-center">
        <p className="deskTel" style={{ fontSize: "1.5rem" }}>
          (620)453-0063
        </p>
        <a
          className="mobileTel"
          href="tel:6204530063"
          style={{ fontSize: "1.5rem" }}
        >
          (620)453-0063
        </a>
      </div>

      <Image />

      <div className="row m-4 justify-content-center">
        <p>
          We build privacy, barbed wire, and steel fences brand new and repair
          old.
        </p>
      </div>
    </div>

    <div className="container">
      <div className="row m-4">
        <div className="col-md d-flex align-items-stretch">
          <Wood />
        </div>
        <div className="col-md d-flex align-items-stretch">
          <Barbed />
        </div>
        <div className="col-md d-flex align-items-stretch">
          <Steel />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
