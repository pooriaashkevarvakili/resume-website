import React from "react";
import image1 from "../../../images/coffie.png";
import image2 from "../../../images/golinoosh.png";
import image3 from "../../../images/ghanad.png";
import PortfolioItem from "./PortfolioItem";
import hakupian from "../../../images/hakupianportfolio.jpg"
import surthland from "../../../images/surthland.png"
import Weblog from "../../../images/weblog_personal.png"
import radar from "../../../images/radar.png"
import paneladmin from "../../../images/paneladminradar361.png"
import ecommerce from "../../../images/portfolio-doshboard.jpg"
const portfolioData = [
  {
    id: 1,
    image: paneladmin,
    title: "panelradar361",
    link: "https://panel.dev.radar361.com/",
    description: "vue nuxt"

  },
  {
    id: 1,
    image: radar,
    title: "radar361",
    link: "http://radar361.com",
    description: "vue nuxt"

  },
  {
    id: 2,
    image: hakupian,
    title: "hakupian",
    link: "https://spa-6eq8433jg-pooriavakili.vercel.app/#/",
    description: "vue quasar"

  },

  {
    id: 3,
    image: surthland,
    title: "tehrantandis/surthland",
    link: "http://surthland-resume.surge.sh",
    description: "vue-js nuxt"

  },


  {
    id: 4,
    image: image1,
    title: "coffie",
    link: "http://coffie-ghahve.surge.sh/",
    description: "react"

  },

  {
    id: 5,
    image: image3,
    title: "ghanadbashi",
    link: "http://ghanadbashi.surge.sh/",
    description: "vue-js nuxt"

  },

  {
    id: 6,
    image: Weblog,
    title: "weblog",
    link: "http://weblogpooriaashkevarvakili.surge.sh/",
    description: "vue quasar"

  },
  {
    id: 7,
    image: image2,
    title: "golinoosh",
    link: "http://golinush.surge.sh/",
    description: "vue-js nuxt"
  },

  {
    id: 8,
    image: ecommerce,
    title: "ecommerce vuetify",
    link: "http://portfoliodashboard.surge.sh/",
    description: "vue nuxt"

  },

];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
