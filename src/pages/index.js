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
        `fence`,
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
        <h1 style={{ fontFamily: "Arial Black", color: "maroon" }}>
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
        <br />
      </div>
      <div class="row mt-2 justify-content-center">
        <p style={{ fontSize: "1.5rem" }}>Residential and Commercial</p>
      </div>

      <Image />

      <div className="row m-4 justify-content-center">
        <p style={{ fontSize: "1.2rem" }}>
          We build new privacy, barbed wire, and steel fences. We also repair
          old fences. All fences are custom built on location. They are built to
          customer specification and satisfaction. Customer satisfaction is our
          ultimate goal!
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
