import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "frontend-developer",
    percentage: "80%"

  },
  {
    id: 2,
    title: "Html, Css, Scss,less",
    percentage: "80%",

  },
  {
    id: 3,
    title: "Bootstrap",
    percentage: "60%",

  },
  {
    id: 4,
    title: "TailwindCSS",
    percentage: "90%"

  },
  {
    id: 5,
    title: "Javascript",
    percentage: "60%"

  },
  {
    id: 6,
    title: "typescript",
    percentage: "60%"
  },
  {
    id: 7,
    title: "ReactJS",
    percentage: "60%"

  },
  {
    id: 8,
    title: "next-js",
    percentage: "60%"

  },
  {
    id: 9,
    title: "vue-js",
    percentage: "90%"

  },
  {
    id: 10,
    title: "nuxt-js",
    percentage: "90%"
  },
  {
    id: 11,
    title: "Git, Github",
    percentage: "90%"

  },
  {
    id: 12,
    title: "vuetify",
    percentage: "90%"
  },
  {
    id: 13,
    title: "quasar",
    percentage: "90%"
  },
  {
    id: 14,
    title: "bootstrap-vue",
    percentage: "80%"
  },
  {
    id: 15,
    title: "ant-design",
    percentage: "70%"

  },
  {
    id: 16,
    title: "vue-ant-design",
    percentage: "70%"

  },
  {
    id: 17,
    title: "bulma",
    percentage: "70%"
  },
  {
    id: 18,
    title: "swagger",
    percentage: "60%"
  },
  {
    id: 19,
    title: "postman",
    percentage: "60%"
  },

  {
    id: 20,
    title: "vuex",
    percentage: "90%"
  },
  {
    id: 21,
    title: "pinia",
    percentage: "90%"
  },
  {
    id: 22,
    title: "scrum",
    percentage: "70%"
  },

];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
