import React from "react";
import image1 from "../../../images/pinia.jpg";
import image2 from "../../../images/nuxt.png";
import supabase from "../../../images/supabase.jpg";
import PortfolioItem from "./PortfolioItem";
import vue from "../../../images/vue.png"
const portfolioData = [
  {
    id: 1,
    image: image2,
    title: "nuxt-js",
    link: "https://www.aparat.com/v/nJqjF?playlist=1891142",
    description: "nuxt-js"

  },
  {
    id: 2,
    image: image1,
    title: "pinia",
    link: "https://www.aparat.com/v/iyahE?playlist=1891150",
    description: "pinia"
  },
  {
    id: 3,
    image: supabase,
    title: "supabase",
    link: "https://www.aparat.com/v/mIWGV?playlist=4281654",
    description: "supabase"
  },
  {
    id: 4,
    image: vue,
    title: "vue-js interviewquestion",
    link: "https://www.aparat.com/v/3Bt6N?playlist=5071313",
    description: "vue-js interviewquestion"
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
