import React from "react";
import image1 from "../../../images/pinia.jpg";
import image2 from "../../../images/twa.jpeg";
import image3 from "../../../images/axios.png";
import image4 from "../../../images/vuex.png";
import chalesh from "../../../images/chalesh.png"
import frontend from "../../../images/front-end.png"
import BlogItem from "./BlogItem";
import pc from "../../../images/pc.jpeg"
import svg from "../../../images/svg.png"
import logo from "../../../images/pooria.jpg"
import firebase from '../../../images/firebase.png'
const blogData = [
  {
    id: 1,
    image: image1,
    title: "pinia",
    link: "https://virgool.io/@pooriavakili09/%D9%BE%DB%8C%DA%86%DB%8C%D8%AF%DA%AF%DB%8Cvue-3-%D8%A8%D8%A7-state-management-pinia-%D8%B1%D8%A7%D8%AD%D8%AA-%D8%A7%D8%B3%D8%AA-tcqt9qe0nsjw",
    description:
      "pinia",
  },
  {
    id: 2,
    image: image2,
    title: "twa",
    description:
      "twa",
    link: "https://virgool.io/@pooriavakili09/twa-hfwv56aulyqw"
  },
  {
    id: 3,
    image: image3,
    title: "axios",
    description:
      "axios",
    link: "https://virgool.io/@pooriavakili09/axios-in-vue-js-yue6pg9joj93"
  },
  {
    id: 4,
    image: image4,
    title: "vuex",
    description:
      "vuex",
    link: "https://virgool.io/@pooriavakili09/vuex-%D8%AF%D8%B1vue-js-a3j26afudhzm"
  },
  {
    id: 5,
    image: chalesh,
    title: "back-end front-end",
    description:
      "back-end front-end",
    link: "https://virgool.io/@pooriavakili09/%DA%86%D8%A7%D9%84%D8%B4-%D9%87%D8%A7%DB%8C-%DA%A9%D8%A7%D8%B1-%D9%81%D8%B1%D8%A7%D9%86%D8%AA-%D8%A7%D9%86%D8%AF-%D8%A8%D8%A7-%D8%A8%DA%A9-%D8%A7%D9%86%D8%AF-%D9%88-%D8%A8%D8%B1%D8%B9%DA%A9%D8%B3-%D9%87%D9%85%DB%8C%D9%86-%D9%85%D9%88%D8%B6%D9%88%D8%B9-cotntzvsccms"
  },
  {
    id: 6,
    image: frontend,
    title: "front-end senior",
    description:
      "back-end front-end",
    link: "https://virgool.io/@pooriavakili09/%DA%86%D8%B7%D9%88%D8%B1-%D8%AF%D8%B1-%D9%81%D8%B1%D8%A7%D9%86%D8%AA-%D8%A7%D9%86%D8%AF-%D8%AF%D9%88%D9%84%D9%88%D9%BE%D8%B1-%D8%B3%D9%86%DB%8C%D9%88%D8%B1-%D8%B4%D9%88%DB%8C%D9%85-ag9wjsstkeax"
  },
  {
    id: 7,
    image: pc,
    title: "howtofront-end develper",
    description:
      "howtofront-end develper",
    link: "https://igmag.ir/%DA%86%D8%B7%D9%88%D8%B1-%D9%85%D9%86-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3-%D8%B4%D8%AF%D9%85-fbtauqic0k3l"
  },
  {
    id: 8,
    image: firebase,
    title: "svg",
    description:
      "svg",
    link: "https://virgool.io/@pooriavakili09/%DB%8C%DA%A9-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3-%D9%85%DB%8C-%D8%AA%D9%88%D8%A7%D9%86%D8%AF-%DA%AF%D8%B1%D8%A7%D9%81%DB%8C%D8%B3%D8%AA-%D8%A8%D8%A7%D8%B4%D8%AF-sujofarkhnhz"
  },
  {
    id: 9,
    image: svg,
    title: "firebase",
    description:
      "firebase",
    link: "https://virgool.io/programmers-revolution/%D9%81%D8%A7%DB%8C%D8%B1%D8%A8%DB%8C%D8%B3-%DA%86%DB%8C%D8%B3%D8%AA-m8e4hjy2jttm"
  },
  {
    id: 10,
    image: logo,
    title: "biographipartone",
    description:
      "biographipartone",
    link: "https://virgool.io/@pooriavakili09/%D8%A8%DB%8C%D9%88%DA%AF%D8%B1%D8%A7%D9%81%DB%8C-%D9%BE%D9%88%D8%B1%DB%8C%D8%A7-%D8%A7%D8%B4%DA%A9%D9%88%D8%B1%D9%88%DA%A9%DB%8C%D9%84%DB%8C-lzsjm017vdpu"
  },
  {
    id: 11,
    image: logo,
    title: "biographipartwo",
    description:
      "biographiparttwo",
    link: "https://virgool.io/@pooriavakili09/%D8%A8%DB%8C%D9%88%DA%AF%D8%B1%D8%A7%D9%81%DB%8C-%D9%82%D8%B3%D9%85%D8%AA-%D8%AF%D9%88%D9%85-cjt2kij48tq2"
  },
  {
    id: 12,
    image: logo,
    title: "biographipartthree",
    description:
      "biographipartthree",
    link: "https://virgool.io/@pooriavakili09/%D8%A8%DB%8C%D9%88%DA%AF%D8%B1%D8%A7%D9%81%DB%8C-%D9%82%D8%B3%D9%85%D8%AA-%D8%B3%D9%88%D9%85-hael9lqgqwvs"
  },
  {
    id: 13,
    image: logo,
    title: "biographipartfour",
    description:
      "biographipartfour",
    link: "https://virgool.io/@pooriavakili09/%D8%A8%DB%8C%D9%88%DA%AF%D8%B1%D8%A7%D9%81%DB%8C-%D9%BE%D9%88%D8%B1%DB%8C%D8%A7-%D8%A7%D8%B4%DA%A9%D9%88%D8%B1%D9%88%DA%A9%DB%8C%D9%84%DB%8C-lzsjm017vdpu"
  },
];

const Blog = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {blogData.map((blog, id) => (
          <BlogItem blog={blog} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
