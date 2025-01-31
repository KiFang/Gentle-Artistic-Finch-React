import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text23">
                    Innovative Solutions for Every Project
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features1-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features1-text18">Our Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text16">
                  Explore the key features that set us apart from the rest.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features1-text21">
                        Diverse Portfolio
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text15">
                        We have successfully completed a wide range of projects
                        in various industries.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features1-text20">Experienced Team</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text19">
                        Our team consists of highly skilled professionals with
                        years of experience.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features1-text14">
                        Collaborative Approach
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text13">
                        We believe in working closely with our clients to
                        achieve the best results.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text17">View Projects</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-button2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features1-text22">Meet the Team</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3Description: undefined,
  feature1ImageAlt: 'Diverse Portfolio Image',
  feature3Title: undefined,
  feature3ImageAlt: 'Collaborative Approach Image',
  feature1Description: undefined,
  sectionDescription: undefined,
  mainAction: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1710504987933-49e48a3f81e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM1MTYyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionTitle: undefined,
  feature2Description: undefined,
  feature2Title: undefined,
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1586281380901-171d7fd8b6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM1MTYyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Experienced Team Image',
  secondaryAction: undefined,
  slogan: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1552960394-c81add8de6b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM1MTYyNHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features1.propTypes = {
  feature3Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  sectionDescription: PropTypes.element,
  mainAction: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
  slogan: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
}

export default Features1
