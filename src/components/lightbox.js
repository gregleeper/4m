import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

export default class Lightbox extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  }

  state = {
    showLightbox: false,
    selectedImage: null,
  }

  render() {
    const { fluid } = this.props
    const { showLightbox, selectedImage } = this.state
    return (
      <>
        <Header>Some of Our Work</Header>
        <LightboxContainer>
          {fluid.map(image => (
            <PreviewButton
              key={image.node.id}
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedImage: image })
              }
            >
              <Img
                key={image.node.id}
                fluid={image.node.childImageSharp.fluid}
              />
            </PreviewButton>
          ))}
        </LightboxContainer>
        {showLightbox && (
          <Dialog
            style={{ width: "auto", marginLeft: "2rem", marginRight: "2rem" }}
            isOpen={showLightbox}
            onDismiss={() => this.setState({ showLightbox: false })}
          >
            <Img fluid={selectedImage.node.childImageSharp.fluid} />
            <button
              type="button"
              onClick={() => this.setState({ showLightbox: false })}
            >
              Close
            </button>
          </Dialog>
        )}
      </>
    )
  }
}

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`

const Header = styled.h2`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
`
