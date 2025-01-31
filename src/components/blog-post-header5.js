import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './blog-post-header5.css'

const BlogPostHeader5 = (props) => {
  return (
    <div className="blog-post-header5-blog-post-header3 thq-section-padding">
      <div className="blog-post-header5-max-width thq-section-max-width">
        <div className="blog-post-header5-section-title">
          <div className="blog-post-header5-title1">
            <div className="blog-post-header5-content1">
              <h1 className="thq-heading-1 blog-post-header5-title2">
                {props.blogPostTitle ?? (
                  <Fragment>
                    <span className="blog-post-header5-text2">ECOCENTRAL</span>
                  </Fragment>
                )}
              </h1>
              <div className="blog-post-header5-content2">
                <div className="blog-post-header5-author">
                  <span className="thq-body-small">Written by</span>
                </div>
                <div className="blog-post-header5-time">
                  <span className="thq-body-small">
                    {props.date ?? (
                      <Fragment>
                        <span className="blog-post-header5-text3">
                          RPG игра, в которой главный герой приезжает в город
                          Экоцентрал, где оказывается втянут в гущу событий.
                          Теперь ему придется сражаться с мусорными монстрами,
                          помогать жителям данного города и столкнуться со злой
                          богиней.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="blog-post-header5-image"
        />
      </div>
    </div>
  )
}

BlogPostHeader5.defaultProps = {
  imageSrc: '/amper-300w.png',
  imageAlt: 'image',
  blogPostTitle: undefined,
  date: undefined,
}

BlogPostHeader5.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  blogPostTitle: PropTypes.element,
  date: PropTypes.element,
}

export default BlogPostHeader5
