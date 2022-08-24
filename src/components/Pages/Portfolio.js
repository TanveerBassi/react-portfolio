import React from "react";
import Project from "../Project";
// import images
import planner from "../../assets/images/planner.png";
import buddy from "../../assets/images/buddy.png";
import weather from "../../assets/images/weather.png";
import quiz from "../../assets/images/quiz.png";
import holiday from "../../assets/images/holiday.png";
import password from "../../assets/images/password.png";

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
      title: "Work Day Scheduler 🔗",
      descriiption:
        "A calender app used for scheduling your work day. Allowing you to time block between 9am to 6pm.",
      image: planner,
      github: "https://github.com/TanveerBassi/day-planner/tree/dev",
      deploy: "https://tanveerbassi.github.io/day-planner/",
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
      title: "Password Generator 🔗",
      descriiption:
        "This project is about creating a password generator which includes elements of HTML, CSS and JavaScript.",
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
