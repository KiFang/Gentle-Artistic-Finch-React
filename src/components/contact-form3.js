import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form3.css'

const ContactForm3 = (props) => {
  return (
    <div className="contact-form3-contact9 thq-section-padding">
      <div className="thq-flex-row thq-section-max-width contact-form3-max-width">
        <div className="contact-form3-content1 thq-flex-column">
          <div className="contact-form3-section-title thq-card">
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form3-text24">we -games</span>
                </Fragment>
              )}
            </span>
            <div className="contact-form3-content2">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact-form3-text21">
                      <span className="contact-form3-text22">
                        ОТПРАВЬТЕ ВАШЕ ПРЕДЛОЖЕНИЕ
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-form3-text26">
                      Будем рады вашим предложениям!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <form className="thq-card">
            <div className="contact-form3-input1">
              <label htmlFor="contact-form-3-name" className="thq-body-small">
                <span>Имя</span>
                <br></br>
              </label>
              <input
                type="text"
                id="contact-form-3-name"
                placeholder="Имя"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-input2">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-3-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-container">
              <label
                htmlFor="contact-form-3-message"
                className="thq-body-small"
              >
                <span>Сообщение</span>
                <br></br>
              </label>
              <textarea
                id="contact-form-3-message"
                rows="3"
                placeholder="Введите ваше сообщение"
                className="thq-input"
              ></textarea>
            </div>
            <div className="contact-form3-checkbox1">
              <input
                type="checkbox"
                id="contact-form-3-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="contact-form-3-check"
                className="contact-form3-text20 thq-body-small"
              >
                I accept the Terms
              </label>
            </div>
            <button
              type="submit"
              className="contact-form3-button thq-button-filled"
            >
              <span className="thq-body-small">
                {props.action ?? (
                  <Fragment>
                    <span className="contact-form3-text25">Отправить</span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm3.defaultProps = {
  heading1: undefined,
  content2: undefined,
  action: undefined,
  content1: undefined,
}

ContactForm3.propTypes = {
  heading1: PropTypes.element,
  content2: PropTypes.element,
  action: PropTypes.element,
  content1: PropTypes.element,
}

export default ContactForm3
