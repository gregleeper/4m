import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import bgImage from "../images/ranch/steel-entrance-Commercial.jpg"

import styled from "styled-components"

const Header = ({ siteTitle, pathname }) => {
  function homeActive() {
    if (pathname === "/") return "active"
    else return ""
  }
  function picsActive() {
    if (pathname === "/pictures") return "active"
    else return ""
  }
  function blogActive() {
    if (pathname === "/blog") return "active"
    else return ""
  }

  function navBar() {
    if (pathname !== "/") {
      return (
        <nav
          className="navbar navbar-dark"
          style={{ backgroundColor: "maroon" }}
        >
          <Link className="navbar-brand" style={{ textDecoration: "none" }}>
            {siteTitle}
          </Link>
          <ul className="navbar-nav flex-row ">
            <li className="nav-item pr-3">
              <Link className={`nav-link ${homeActive()}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item pr-3">
              <Link className={`nav-link ${picsActive()}`} to="/pictures">
                Pictures
              </Link>
            </li>
            <li className="nav-item pr-3">
              <Link className={`nav-link  ${blogActive()}`} to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      )
    }
    return (
      <BgImage>
        <nav className="navbar navbar-dark">
          <Link className="navbar-brand" style={{ textDecoration: "none" }}>
            {siteTitle}
          </Link>
          <ul className="navbar-nav flex-row ">
            <li className="nav-item pr-3">
              <Link className={`nav-link ${homeActive()}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item pr-3">
              <Link className={`nav-link ${picsActive()}`} to="/pictures">
                Pictures
              </Link>
            </li>
            <li className="nav-item pr-3">
              <Link className={`nav-link  ${blogActive()}`} to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container" style={{ height: "325px" }}>
          <div className="row m-4 justify-content-center  ">
            <h1
              className="displayFont"
              style={{
                textAlign: "center",
                color: "maroon",
              }}
            >
              Don't call the rest when you can have the best!
            </h1>{" "}
          </div>
        </div>
      </BgImage>
    )
  }

  return <div>{navBar()}</div>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const BgImage = styled.div`
  background: linear-gradient(rgba(1, 0, 0, 0.1), rgba(1, 0, 0, 0.1)),
    url(${bgImage});
  min-height: 380px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export default Header
