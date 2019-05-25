/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
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
                <div className="col-md">
                  <h6>Menu</h6>
                  <Menu>
                    <li>Home</li>
                    <li>Blog</li>
                  </Menu>
                </div>
                <div className="col-md mb-3">Follow us on Facebook</div>
                <div className="col-md">
                  Call Today!
                  <br />
                  <p className="deskTel">(620)453-0063</p>
                  <a className="mobileTel" href="tel:6204530063">
                    (620)453-0063
                  </a>
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
  background-color: lightgray;
  margin-top: 3rem;
  color: black;
  text-align: center;
  padding-bottom: 4rem;
`

const Menu = styled.ul`
  list-style: none;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
