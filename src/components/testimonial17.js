import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text29">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text35">
                  Working with Megames Group has been a game-changer for our
                  business. Their innovative solutions have helped us achieve
                  remarkable results.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text34">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            CEO, ABC Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text27">
                        Megames Group exceeded our expectations in every way
                        possible. Their professionalism and dedication to our
                        project were truly commendable.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36">
                            Founder, XYZ Co.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text25">
                        I highly recommend Megames Group for anyone looking to
                        take their project to the next level. Their expertise
                        and creativity are unmatched.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            David Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            CTO, LMN Corp.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text26">
                        We are extremely satisfied with the services provided by
                        Megames Group. They delivered exceptional results within
                        the set timeline.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Sarah Williams
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Marketing Director, PQR Ltd.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        Megames Group truly understands the needs of their
                        clients and goes above and beyond to deliver outstanding
                        outcomes. We are thrilled with the results.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Position: undefined,
  review2: undefined,
  review3: undefined,
  review1: undefined,
  author2Name: undefined,
  author1Alt: 'Image of John Doe',
  heading1: undefined,
  author1Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1530452540414-c17a65a637fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM1MDkxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  review4: undefined,
  author4Name: undefined,
  author4Alt: 'Image of Sarah Williams',
  author4Src:
    'https://images.unsplash.com/photo-1533392151650-269f96231f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM1MDkxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author3Alt: 'Image of David Johnson',
  author3Position: undefined,
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM1MDkxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  author2Position: undefined,
  author3Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1528892952291-009c663ce843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODM1MDkxM3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author4Position: PropTypes.element,
  review2: PropTypes.element,
  review3: PropTypes.element,
  review1: PropTypes.element,
  author2Name: PropTypes.element,
  author1Alt: PropTypes.string,
  heading1: PropTypes.element,
  author1Position: PropTypes.element,
  author3Src: PropTypes.string,
  review4: PropTypes.element,
  author4Name: PropTypes.element,
  author4Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Position: PropTypes.element,
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  content1: PropTypes.element,
  author2Position: PropTypes.element,
  author3Name: PropTypes.element,
  author2Src: PropTypes.string,
}

export default Testimonial17
