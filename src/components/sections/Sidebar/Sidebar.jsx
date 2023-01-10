import React from "react";
import {

  FaGithub,

  FaLinkedinIn,
  FaWhatsapp,


} from "react-icons/fa";
import {
  AiOutlineMail
} from "react-icons/ai"

const socials = [

  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/pooriaashkevarvakili",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/pooria-ashkevar-vakili-6457a917a",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    link: "https://api.whatsapp.com/send/?phone=989376720694&text&type=phone_number&app_absent=0",
  },


  {
    id: 4,
    icon: <AiOutlineMail />,
    link: "pooriavakili09@gmail.com",
  },

];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src="logo.jpg" alt="shafiqhammad" className="w-full rounded-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">pooriaashkevarvakili</h1>
        <p className="text-sm text-gray-400 mb-3">
          Frontend Web Developer react,vue

        </p>
        <a
          href="https://s26.picofile.com/d/8458242718/b0a6d325-f527-470b-9088-6a71df04c69c/front_end.pdf"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume.pdf"
        >
          Download Resume
        </a>
        <div

        >
          mobile:09376720694
        </div>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          Three years of work experience in the field of front end developer Vue js Nuxt js on the web side I have. So far, I have worked with teams of five to fifteen people. I do every task in js.Vue js.Nuxt js,react,next-js to the best of my ability.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
