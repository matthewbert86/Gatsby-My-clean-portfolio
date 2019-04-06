import React from "react"
import { Link } from "gatsby"

import "./myNavbar.css"

const MyNavbar = () => (
  <div className="top_border" style={{ marginBottom: "0px", width: "100%" }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px`,
        paddingTop: 0,
      }}
    >
      <ul className="nav_styles">
        <li className="float_left brand">
          <i className="fas fa-frog" />
        </li>
        <li className="float_right">
          {/* eslint-disable-next-line */}
          <a
            href="https://www.github.com/ugglr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="float_right">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="float_right">
          <Link to="/about">About</Link>
        </li>
        <li className="float_right">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default MyNavbar
