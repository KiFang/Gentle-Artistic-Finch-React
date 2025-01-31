import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Banner1 from '../components/banner1'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Gentle Artistic Finch</title>
        <meta property="og:title" content="Gentle Artistic Finch" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">#projects</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">#about</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">#help</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Projects</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">ПРОЕКТЫ</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">ПОМОЧЬ</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/about"
        page1Description={
          <Fragment>
            <span className="home-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Banner1
        action1={
          <Fragment>
            <span className="home-text24">ПРОЕКТЫ</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text25">Открываем дверь в новые миры.</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text26">
              <span>MEGAMES GROUP</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Banner1>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text29">
              <span className="home-text30">
                Если вам показались интересными мои проекты то вы можете помочь
                осуществить их
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                поучаствовав
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text32">в разработке.</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text33">Хотите помочь?</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text34">
              <span>Безвозмездная помощь</span>
              <br></br>
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text37">Ваши предложения</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text38">123 Main Street, City, Country</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text39">456 Park Avenue, City, Country</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        termsLink={
          <Fragment>
            <span className="home-text40">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text41">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text42">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
