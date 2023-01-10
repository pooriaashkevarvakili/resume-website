import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import About from "../../pages/About/About";
import Services from "../../pages/Service/Service"
import Work from "../../pages/Work/Portfolio"
import Portfolio from "../../pages/Portfolio/Portfolio";
import Blog from "../../pages/Blog/Blog"
import Video from "../../pages/Video/Video";
const navbarData = [
  {
    id: 1,
    title: "About",
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
  }


];

const Navbar = () => {
  return (
    <Router>
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
        <ul className="flex flex-wrap">
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/video">
          <Video />
        </Route>
        <Route path="/about">
          <About />
        </Route>

      </Switch>
    </Router>
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
