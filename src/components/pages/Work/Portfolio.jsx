import React from "react";
import tehrantc from "../../../images/tehrantc.png";
import image2 from "../../../images/avajang.jpg";
import image3 from "../../../images/hakupian.jpg";
import PortfolioItem from "./PortfolioItem";
import radar from "../../../images/radar.png"
const portfolioData = [
  {
    id: 1,
    image: radar,
    title: "radar361",
    link: "http://radar361.com",
    description: "two  month"
  },

  {
    id: 3,
    image: tehrantc,
    title: "tehrantc-surthland",
    link: "https://tehrantc.com/",
    description: "six month"
  },
  {
    id: 4,
    image: image2,
    title: "avajang",
    link: "https://www.avajang.com/",
    description: "seven month"

  },
  {
    id: 5,
    image: image3,
    title: "hakupian",
    link: "https://hacoupian.net/",
    description: "fourteenmonth"
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
