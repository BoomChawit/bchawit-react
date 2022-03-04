import React from 'react'
import "./portfolio.css"
import IMG1 from "../../asset/Pic_05.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Oxford Reach Scholarship",
    github: "http://github.com/BoomChawit",
    demo: "http://github.com/BoomChawit"
  },
  {
    id: 2,
    image: IMG1,
    title: "Oxford Reach Scholarship",
    github: "http://github.com/BoomChawit",
    demo: "http://github.com/BoomChawit"
  },
  {
    id: 3,
    image: IMG1,
    title: "Oxford Reach Scholarship",
    github: "http://github.com/BoomChawit",
    demo: "http://github.com/BoomChawit"
  },
  {
    id: 4,
    image: IMG1,
    title: "Oxford Reach Scholarship",
    github: "http://github.com/BoomChawit",
    demo: "http://github.com/BoomChawit"
  },
  {
    id: 5,
    image: IMG1,
    title: "Oxford Reach Scholarship",
    github: "http://github.com/BoomChawit",
    demo: "http://github.com/BoomChawit"
  },
  {
    id: 6,
    image: IMG1,
    title: "Oxford Reach Scholarship",
    github: "http://github.com/BoomChawit",
    demo: "http://github.com/BoomChawit"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt="IMG1" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio