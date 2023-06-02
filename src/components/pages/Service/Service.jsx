import React from "react";
import { FaHtml5, FaBootstrap, FaVuejs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    id: 1,
    icon: <FaHtml5 />,
    title: "Web Development",

  },
  {
    id: 2,
    icon: <FaVuejs />,
    title: "vue-js",

  },
  {
    id: 3,
    icon: <FaVuejs />,
    title: "nuxt-js",

  },

  {
    id: 4,
    icon: <SiTailwindcss />,
    title: "Tailwindcss Template",

  },
  {
    id: 5,
    icon: <FaBootstrap />,
    title: "Bootstrap Template",

  },

];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
