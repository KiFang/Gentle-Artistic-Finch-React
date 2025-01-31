import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ContactForm3 from '../components/contact-form3'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Gentle Artistic Finch</title>
        <meta property="og:title" content="Contact - Gentle Artistic Finch" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">#projects</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">#about</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">#help</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15">Projects</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text18">ПРОЕКТЫ</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text19">ПОМОЧЬ</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/about"
        page1Description={
          <Fragment>
            <span className="contact-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <ContactForm3
        action={
          <Fragment>
            <span className="contact-text24">Отправить</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text25">
              <span>НАПИШИТЕ ВАШИ ПРЕДЛОЖЕНИЯ НИЖЕ</span>
              <br></br>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text28">we - games</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text29">
              <span>ОБРАТНАЯ СВЯЗЬ</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></ContactForm3>
      <Footer4
        termsLink={
          <Fragment>
            <span className="contact-text32">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text33">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text34">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
