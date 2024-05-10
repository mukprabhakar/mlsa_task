/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "https://images.unsplash.com/photo-1715276611505-fbea90d3e9e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D";

const imageAltText = "dessfdlhk;sn";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Problem Of the Day 🎉",
    description:
      "Collaboration tsdbgfhjlkl;cvbtrdmyuoipscdl;kj;;.",
    url: "https://github.com/mukprabhakar/Problem-Of-The-Day1",
  },
  {
    title: "ATM Interface",
    description:
      "Contributed wcbtrmyuopiccccl; roiupdf hgl̥.",
    url: "https://github.com/mukprabhakar/ATM_INTERFACE",
  },
  {
    title: "Online Seat Booking",
    description:
      "Createqweqrrbtoicvemyuopsfd,hjioasdvbgfnmhjuoievbtrmyuo/i.",
    url: "https://github.com/mukprabhakar/online_registration",
  },
  {
    title: "Matrix Calculator",
    description:
      "Vidaxsdbgflkj fl̥ rtyuxwbtrmyui u,i,.",
    url: "https://github.com/mukprabhakar/Matrix-Calculator_by_c_langauge",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
