import React from "react";
import image1 from "../../../images/surthland.png";
import image2 from "../../../images/avajang.jpg";
import image3 from "../../../images/hakupian.jpg";
import image4 from "../../../images/portfolio/project-04.jpg";
import PortfolioItem from "./PortfolioItem";
import radar from "../../../images/radar.png"

const portfolioData = [
  {
    id: 1,
    image: radar,
    title: "radar361",
    link: "http://radar361.com",
    description: " month"
  },
  {
    id: 2,
    image: image1,
    title: "surthland",
    link: "http://surthland-resume.surge.sh/",
    description: "two month"
  },
  {
    id: 3,
    image: image2,
    title: "avajang",
    link: "https://www.avajang.com/",
    description: "seven month"

  },
  {
    id: 4,
    image: image3,
    title: "hakupian",
    link: "https://hacoupian.net/",
    description: "fourteenmonth"
  },
  {
    id: 5,
    image: image4,
    title: "nadinsamaneayande",
    link: "#0",
    description: "threemonth"
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
