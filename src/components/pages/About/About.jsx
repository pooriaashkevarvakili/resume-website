import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Three years of work experience in the field of front end developer Vue js Nuxt js on the web side I have. So far, I have worked with teams of five to fifteen people. I do every task in js.Vue js.Nuxt js to the best of my ability.
            </p>

          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
