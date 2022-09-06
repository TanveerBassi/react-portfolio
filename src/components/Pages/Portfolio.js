import React from "react";
import Project from "../Project";
// import images
import book from "../../assets/images/book.png";
import buddy from "../../assets/images/buddy.png";
import weather from "../../assets/images/weather.png";
import quiz from "../../assets/images/quiz.png";
import holiday from "../../assets/images/holiday.png";
import password from "../../assets/images/password.png";
import portfolio from "../../assets/images/portfolio.png";
import jate from "../../assets/images/jate.png";
import nosql from "../../assets/images/nosql.png";

export default function Portfolio() {
  const projects = [
    {
      title: "Buddy Up 🔗",
      descriiption:
        "This is an interactive app that allows students to find their ideal tutor to help further their skills in their chosen subject.",
      image: buddy,
      github: "https://github.com/roxywasiak/buddy-up",
      deploy: "https://limitless-citadel-05906.herokuapp.com/",
    },
    {
      title: "Google Book search engine 🔗",
      descriiption:
        "Google Books API search engine built with a GraphQL API built with Apollo Server. Using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server.",
      image: book,
      github: "https://github.com/TanveerBassi/book-search-engine/tree/dev",
      deploy: "https://lit-mountain-59743.herokuapp.com/",
    },
    {
      title: "Virtual Holiday 🔗",
      descriiption:
        "This interactive app allows the user to experience a virtual holiday abroad.",
      image: holiday,
      github: "https://github.com/C-Sim/virtual-holiday",
      deploy: "https://c-sim.github.io/virtual-holiday/",
    },

    {
      title: "Portfolio 🔗",
      descriiption: "Portfolio created using react to display my projects",
      image: portfolio,
      github: "https://github.com/TanveerBassi/react-portfolio/tree/dev",
      deploy: "https://tanveerbassi.github.io/react-portfolio/",
    },
    {
      title: "Text Editor 🔗",
      descriiption:
        "A text editor that runs in the browser as a single-page application that meets the PWA criteria",
      image: jate,
      github: "https://github.com/TanveerBassi/jate",
      deploy: "https://fathomless-refuge-55776.herokuapp.com/",
    },

    {
      title: "Weather Dashboard 🔗",
      descriiption:
        "A weather app that provides weather outlook for multiple cities.",
      image: weather,
      github: "https://github.com/TanveerBassi/weather-dashboard/tree/dev",
      deploy: "https://tanveerbassi.github.io/weather-dashboard/",
    },
    {
      title: "Code Quiz 🔗",
      descriiption: "A simple coding quiz app.",
      image: quiz,
      github: "https://github.com/TanveerBassi/quiz-app/tree/dev",
      deploy: "https://tanveerbassi.github.io/quiz-app/",
    },
    {
      title: "NOSQL-social-network-api 🔗",
      descriiption:
        "An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
      image: nosql,
      github:
        "https://github.com/TanveerBassi/NOSQL-social-network-api/tree/dev",
      deploy:
        "https://github.com/TanveerBassi/NOSQL-social-network-api/tree/dev",
    },
    {
      title: "Password Generator 🔗",
      descriiption:
        "An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
      image: password,
      github: "https://github.com/TanveerBassi/password-generator/tree/dev",
      deploy: "https://tanveerbassi.github.io/password-generator/",
    },
  ];

  const projectItem = projects.map((projects) => (
    <Project
      key={projects.title}
      title={projects.title}
      descriiption={projects.descriiption}
      image={projects.image}
      github={projects.github}
      deploy={projects.deploy}
    />
  ));

  return (
    <div>
      <h2 className="title">Projects</h2>
      <div className="row project">{projectItem}</div>
    </div>
  );
}
