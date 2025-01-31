import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import BlogPostHeader5 from '../components/blog-post-header5'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Gentle Artistic Finch</title>
        <meta property="og:title" content="About - Gentle Artistic Finch" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="about-text10">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text11">#projects</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text12">#about</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text13">#help</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-text15">Projects</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-text16">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-text17">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text18">ПРОЕКТЫ</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text19">ПОМОЧЬ</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/about"
        page1Description={
          <Fragment>
            <span className="about-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="about-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <BlogPostHeader5
        date={
          <Fragment>
            <span className="about-text24">
              RPG игра, в которой главный герой приезжает в город Экоцентрал,
              где оказывается втянут в гущу событий. Теперь ему придется
              сражаться с мусорными монстрами, помогать жителям данного города и
              столкнуться со злой богиней.
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="about-text25">ECOCENTRAL</span>
          </Fragment>
        }
      ></BlogPostHeader5>
      <BlogPostHeader5
        date={
          <Fragment>
            <span className="about-text26">
              Командный шутер с главным режимом 5v5 с раскрываемыми персонажами
              и удивительным миром фантазии, который скрывает за собой ужасную
              истину!
            </span>
          </Fragment>
        }
        imageSrc="/deiko-300w.png"
        blogPostTitle={
          <Fragment>
            <span className="about-text27">FANTAZONE</span>
          </Fragment>
        }
      ></BlogPostHeader5>
      <BlogPostHeader5
        date={
          <Fragment>
            <span className="about-text28">
              RPG игра с элементами гача и исследования мира. Повествование
              ведется о главном герое игры - Анипсе (мужской пол)/ Имерве
              (женский пол), который был рожден из слияния двух видов магии.
            </span>
          </Fragment>
        }
        imageSrc="/wate-500h.png"
        blogPostTitle={
          <Fragment>
            <span className="about-text29">DISTRAGEON</span>
          </Fragment>
        }
      ></BlogPostHeader5>
      <Footer4
        termsLink={
          <Fragment>
            <span className="about-text30">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text31">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text32">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
