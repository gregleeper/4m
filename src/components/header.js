import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, pathname }) => {
  function homeActive() {
    console.log(pathname)
    if (pathname === "/") return "active"
    else return ""
  }
  function blogActive() {
    if (pathname === "/blog") return "active"
    return
  }
  return (
    <nav className="navbar navbar-dark" style={{ backgroundColor: "maroon" }}>
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
          <Link className={`nav-link  ${blogActive()}`} to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
