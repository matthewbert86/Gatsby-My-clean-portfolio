import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

import "./footer.css"
import "../../fontawesome/css/all.min.css"

const Footer = () => (
  <React.Fragment>
    <div
      className="top_border"
      style={{ marginBottom: "0px", width: "100%", marginTop: "3rem" }}
    />
    <Jumbotron fluid style={footer_styles}>
      <Container style={{ maxWidth: "960px" }}>
        <Row>
          <Col>
            <h3>Carl-W. Igelstroem</h3>
            <a href="mailto:carl.igelstrom@gmail.com">
              <span style={{ color: "blueviolet", fontSize: "1.3rem" }}>
                carl.igelstrom@gmail.com
              </span>
            </a>
            <p style={{ fontSize: "1.3rem", marginTop: "2rem" }}>
              I'm a Swedish developer living in Hangzhou, China. I can help you
              build and grow your next product
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              textDecoration: "underline",
              fontSize: "1.4rem",
              marginBottom: "1rem",
              marginTop: "2rem",
            }}
          >
            Menu
          </Col>
        </Row>
        <Row>
          <Col xs={2} style={{ fontSize: "1.3rem" }}>
            <Link to="/">
              <span className="link_styles">Home</span>
            </Link>
          </Col>
          <Col xs={2} style={{ fontSize: "1.3rem" }}>
            <Link to="/about">
              <span className="link_styles">About</span>
            </Link>
          </Col>
          <Col xs={2} style={{ fontSize: "1.3rem" }}>
            <Link to="/projects">
              <span className="link_styles">Projects</span>
            </Link>
          </Col>
        </Row>
        <Row className="footer_social text-center">
          <Col>
            <a
              href="https://www.github.com/ugglr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github hover_effect" />
            </a>
          </Col>
          <Col>
            <a
              href="https://www.linkedin.com/in/igelstrom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin hover_effect" />
            </a>
          </Col>
          <Col>
            <a
              href="https://twitter.com/real_carlw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter hover_effect" />
            </a>
          </Col>

          <Col>
            <a
              href="https://www.instagram.com/hangzhouist/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram hover_effect" />
            </a>
          </Col>

          <Col>
            <a
              className="hover_effect"
              href="https://www.hackerrank.com/carl_igelstrom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-hackerrank hover_effect" />
            </a>
          </Col>
          <Col>
            <a
              href="https://angel.co/igelstroem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-angellist hover_effect" />
            </a>
          </Col>
        </Row>
        <Row className="text-center" style={{ marginTop: "3rem" }}>
          <Col>
            Carl-W.Igelstroem © {new Date().getFullYear()}, Built with
            <i
              className="fas fa-mug-hot"
              style={{
                marginLeft: "10px",
                marginRight: "3px",
                fontSize: "1.5rem",
              }}
            />
            <a href="https://www.gatsbyjs.org">
              {" "}
              <span className="blueViolet">& Gatsby</span>
            </a>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

const footer_styles = {
  marginTop: "0rem",
  marginBottom: "0",
  backgroundColor: "#000",
  color: "#fff",
  paddingBottom: "0",
  width: "100%",
}

export default Footer
