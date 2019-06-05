/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <>
        {console.log(location)}
        <div style={{ backgroundColor: "whitesmoke" }}>
          <Header
            pathname={location.pathname}
            siteTitle={data.site.siteMetadata.title}
          />
          <div
            style={{
              paddingBottom: "5%",
            }}
          >
            <main>{children}</main>
          </div>
          <Footer>
            <div className="container">
              <div className="row">
                <div className="col-md" style={{ marginTop: "2rem" }}>
                  <h5>Menu</h5>
                  <Menu>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/pictures">Pictures</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                  </Menu>
                </div>
                <div className="col-md mb-3" style={{ marginTop: "2rem" }}>
                  Follow us on Facebook
                </div>
                <div className="col-md" style={{ marginTop: "2rem" }}>
                  Call Today!
                  <br />
                  <p className="deskTel">(620)-453-0063</p>
                  <p className="mobileTel">
                    Tap number to call! ->{" "}
                    <a href="tel:6204530063">(620)-453-0063</a>
                  </p>
                </div>
              </div>
            </div>
          </Footer>
        </div>
      </>
    )}
  />
)

const Footer = styled.footer`
  background-color: maroon;
  margin-top: 3rem;
  color: white;
  text-align: center;
  padding-bottom: 4rem;
  a {
    color: white;
  }
`

const Menu = styled.ul`
  list-style: none;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
