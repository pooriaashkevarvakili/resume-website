import React, { useEffect } from "react";
import {

  NavLink,
  Route,
  Routes




} from "react-router-dom";
import About from "../../pages/About/About";
import Services from "../../pages/Service/Service"
import Work from "../../pages/Work/Portfolio"
import Portfolio from "../../pages/Portfolio/Portfolio";
import Blog from "../../pages/Blog/Blog"
import Video from "../../pages/Video/Video";
import Contact from "../../pages/Contact/Contact"
import { useTranslation } from "react-i18next"
import i18next from "i18next";

const navbarData = [

  {
    id: 1,
    title: i18next.t('about'),
    to: "/about",
  },
  {
    id: 2,
    title: "services",
    to: '/services'
  },

  {
    id: 3,
    title: "portfolio",
    to: "/portfolio",
  },
  {
    id: 4,
    title: "work",
    to: "/work",
  },
  {
    id: 5,
    title: "blog",
    to: "/blog"
  },
  {
    id: 6,
    title: "video",
    to: "/video"
  },
  {
    id: 7,
    title: "contact",
    to: "/contact"
  }

];
const Navbar = () => {
  const { i18n } = useTranslation(['common'])
  useEffect(() => {

    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage('en')
    }

  }, [])
  const handleLanguage = (e) => {
    const changeLanguage = e.target.value
    i18n.changeLanguage(changeLanguage)

  }
  return (
    <>
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
        <ul className="flex flex-wrap">
          {navbarData.map((el, id) => (

            <LinkItem el={el} key={id} />


          ))}

        </ul>
        <div className="w-full">

        </div>

      </nav>
      <Routes>
        <Route exact path='/' element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/video" element={<Video />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>

  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="m-3 lg:mx-5">
      <NavLink
        to={to}
        activeClassName="text-purple-600"
        className="text-gray-800 text-medium hover:text-purple-600"
      >
        {title}
      </NavLink>
    </li>
  );
};
