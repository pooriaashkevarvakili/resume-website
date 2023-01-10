import React from "react";
import image1 from "../../../images/pinia.jpg";
import image2 from "../../../images/nuxt.png";

import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "nuxt-js",
    link: "https://www.aparat.com/v/nJqjF?playlist=1891142",
    description: "nuxt-js"

  },
  {
    id: 2,
    image: image2,
    title: "pinia",
    link: "https://www.aparat.com/v/iyahE?playlist=1891150",
    description: "pinia"
  },

];

const Video = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((video, id) => (
          <PortfolioItem video={video} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Video;
