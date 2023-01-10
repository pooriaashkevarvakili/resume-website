import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "frontend-developer",
    percentage: "50%",
  },
  {
    id: 2,
    title: "Html, Css, Scss",
    percentage: "50%",
  },
  {
    id: 3,
    title: "Bootstrap",
    percentage: "50%"
  },
  {
    id: 4,
    title: "TailwindCSS",
    percentage: "50%"
  },
  {
    id: 5,
    title: "Javascript",
    percentage: "50%"
  },
  {
    id: 6,
    title: "ReactJS",
    percentage: "50%"
  },
  {
    id: 7,
    title: "vue-js",
    percentage: "50%"
  },
  {
    id: 8,
    title: "nuxt-js",
    percentage: "50%"
  },
  {
    id: 9,
    title: "Git, Github",
    percentage: "50%"

  },
  {
    id: 10,
    title: "vuetify",
    percentage: "50%"
  },
  {
    id: 11,
    title: "quasar",
    percentage: "50%"
  },
  {
    id: 12,
    title: "next-js",
    percentage: "50%"
  },
  {
    id: 13,
    title: "vuex",
    percentage: "50%"
  },
  {
    id: 14,
    title: "pinia",
    percentage: "50%"
  },
  {
    id: 15,
    title: "typescript",
    percentage: "50%"
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
