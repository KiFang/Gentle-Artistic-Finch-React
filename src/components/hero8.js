import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-section-max-width thq-flex-column">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero8-text8">Welcome to Our Company</span>
                </Fragment>
              )}
            </h1>
            <p className="hero8-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero8-text5">
                    Explore our innovative projects and meet our talented team.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero8-actions">
              <button className="thq-button-filled hero8-button1">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero8-text6">Learn More</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero8-button2">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero8-text7">Contact Us</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  content1: undefined,
  action1: undefined,
  action2: undefined,
  heading1: undefined,
}

Hero8.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  action2: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero8
