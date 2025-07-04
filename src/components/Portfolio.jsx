"use client";
import React, { useState } from "react";
// import { PinContainer } from "../ui/3d-pin";
import { PinContainer } from "../components/ui/3d-pin";
import image_1 from "../assets/birdscode.webp";
import image_2 from "../assets/starplify.webp";
import image_3 from "../assets/mit.webp";
import image_4 from "../assets/booken.webp";
import image_5 from "../assets/education.webp";
import image_6 from "../assets/halloween.webp";
import image_7 from "../assets/redhatAnsible.webp";
import image_8 from "../assets/redhatOpen.webp";
import image_9 from "../assets/tourly.webp";
import image_10 from "../assets/volti.webp";
import image_11 from "../assets/carshoroom.webp";
const Portfolio = () => {
  const [viewMore, setViewMore] = useState(false);
  const CardInfo = ({ url_title, url, title, description, img, index }) => {
    return (
      <div className="w-full h-full flex items-center justify-center ">
        <PinContainer title={url_title} href={url}>
          <div className="flex basis-full flex-col gap-4 p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[100%] h-[100%]">
            <h3 className="font-bold  text-lg text-black">{title}</h3>
            <div className="w-[100%] h-full flex items-center justify-center">
              <img src={img} alt="" />
            </div>
          </div>
        </PinContainer>
      </div>
    );
  };
  const projects = [
    {
      url_title: "Portfolio site",
      url: "https://birds-code.netlify.app/",
      title: "Birds code community",
      img: image_1,
    },
    {
      url_title: "Job portal",
      url: "https://www.starplify.com/",
      title: "Starplify job portal",
      img: image_2,
    },
    {
      url_title: "Education domain",
      url: "https://mit-project.netlify.app/",
      title: "Mit landing page with animation",
      img: image_3,
    },
    {
      url_title: "bookens project",
      url: "https://bookens-master.netlify.app/",
      title: "Book Order ui project",
      img: image_4,
    },
    {
      url_title: "education project",
      url: "https://educations-b.netlify.app/",
      title: "Education website",
      img: image_5,
    },
    {
      url_title: "helloween project",
      url: "https://helloween-order.netlify.app/",
      title: "Helloween ui project",
      img: image_6,
    },
    {
      url_title: "redhat project",
      url: "https://redhat-ansible.netlify.app/",
      title: "Redhat Ansible ui project",
      img: image_7,
    },
    {
      url_title: "Redhat project",
      url: "https://redhat-openshift.netlify.app/",
      title: "Redhat OpenShift ui project",
      img: image_8,
    },
    {
      url_title: "tourly project",
      url: "https://book-flight-ticket.netlify.app/",
      title: "Tourly ui project",
      img: image_9,
    },
    {
      url_title: "valti project",
      url: "https://volti-bikes.netlify.app/",
      title: "Valti ui project",
      img: image_10,
    },
    {
      url_title: "cars project",
      url: "https://cars-showp.netlify.app/",
      title: "cars showroom ui project",
      img: image_11,
    },
  ];

  const desplayedProjects = viewMore ? projects : projects.slice(0, 6);
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-2xl md:text-3xl font-heading font-semibold ">
          Portfolio
        </h1>
        <p className="text-sm text-neutral-600 font-paragraph font-medium ">
          Explore a selection of my recent projects — from full-stack web apps
          to responsive UI designs. Each project reflects my commitment to clean
          code, modern design, and solving real-world problems through
          technology.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {desplayedProjects.map((cardInfo, index) => (
          <CardInfo key={cardInfo.title} {...cardInfo} index={index} />
        ))}
      </div>
      <div className="flex items-center justify-end">
        {!viewMore ? (
          <button
            onClick={() => setViewMore(true)}
            className="font-heading  text-gray-600 border border-gray-600 px-4 py-2 rounded transition-colors"
          >
            view more
          </button>
        ) : (
          <button
            onClick={() => setViewMore(false)}
            className="font-heading  text-gray-600 border border-gray-600 px-4 py-2 rounded transition-colors"
          >
            less then
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
