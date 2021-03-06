import React from "react"
import { Row, Col } from "react-bootstrap"

import "./projectCard.css"
import MyButton from "../myButton/MyButton"

//Props:
//imageSrcPath: the path to the image used
//title: The title of the card/App
//date: The date of the card
//description: Short description of the card
//sourceURL: URL to the source code of the project
//leftButtonText: changes the left button text
//hostedURL: URL to the hosted version of the app
//rightButtonText: changes the right button text

const ProjectCard = props => {
  console.log("CARD PROPS", props)
  return (
    <div className="project_container">
      <Row>
        <Col>
          <img
            src={props.imageSrcPath}
            alt={"Smiley face"}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Col>
        <Col>
          <h4>
            {props.title}
            <br />
            <small>{props.date}</small>
          </h4>

          <p>{props.description}</p>

          <Row>
            {props.sourceURL && props.sourceURL.length > 0 && (
              <MyButton
                text={
                  props.leftButtonText ? props.leftButtonText : "Source Code"
                }
                URL={props.sourceURL}
              />
            )}
            {props.hostedURL && props.hostedURL.length > 0 && (
              <MyButton
                text={
                  props.rightButtonText ? props.rightButtonText : "Hosted App"
                }
                URL={props.hostedURL}
              />
            )}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectCard
