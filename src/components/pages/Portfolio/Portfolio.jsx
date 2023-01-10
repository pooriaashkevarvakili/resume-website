import React from "react";
import image1 from "../../../images/coffie.png";
import image2 from "../../../images/golinoosh.png";
import image3 from "../../../images/ghanad.png";
import flower from "../../../images/flower.png";
import PortfolioItem from "./PortfolioItem";
import hakupian from "../../../images/hakupianportfolio.jpg"
import surthland from "../../../images/surthland.png"
import Weblog from "../../../images/weblog_personal.png"
const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "coffie",
    link: "http://coffie-ghahve.surge.sh/",
    description: "react"

  },
  {
    id: 2,
    image: image2,
    title: "golinoosh",
    link: "http://golinush.surge.sh/",
    description: "vue-js nuxt"
  },
  {
    id: 3,
    image: image3,
    title: "ghanadbashi",
    link: "http://ghanadbashi.surge.sh/",
    description: "vue-js nuxt"

  },
  {
    id: 4,
    image: surthland,
    title: "surthland",
    link: "http://surthland-resume.surge.sh",
    description: "vue-js nuxt"

  },
  {
    id: 5,
    image: hakupian,
    title: "hakupian",
    link: "https://spa-6eq8433jg-pooriavakili.vercel.app/#/",
    description: "vue"

  },
  {
    id: 6,
    image: flower,
    title: "flower",
    link: "http://flower-shopping-cart.surge.sh/",
    description: "vue js nuxt"

  },
  {
    id: 6,
    image: Weblog,
    title: "weblog",
    link: "http://weblogpooriaashkevarvakili.surge.sh/",
    description: "vue"

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
