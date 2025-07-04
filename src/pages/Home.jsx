import React, { useRef, useEffect, useState } from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import "../style/HeroSection.css";
import heroImage from "../assets/main-bg.webp";
import sky from "../assets/Vector (2).png";
import MyPhoto from "../assets/myPhoto.png";
import Vector from "../assets/Vector (3).png";
import { TypeAnimation } from "react-type-animation";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import BlogVideo from "@/components/blogVideo";
import HeroSection from "@/components/HeroSection";
import { Github, Linkedin, Mail } from "lucide-react";
import Contack from "@/components/Contack";
const Home = () => {
  const words = `I actively work on personal and client-based web projects to continuously enhance my skills and contribute to impactful digital solutions.
`;
  const Testi = [
    {
      name: "Wonderful Support!",
      decs: "They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.",
    },
    {
      name: "Awesome Services!",
      decs: "Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed",
    },
  ];
  return (
    <div className="flex flex-col gap-11 md:gap-14 lg:gap-16">
      <section>
        <HeroSection />
      </section>
      <section className="lg:px-20 md:px-10 px-5" id="about">
        <div className="flex md:flex-row flex-col items-center gap-8  md:gap-0">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl font-heading font-semibold ">
              About Me
            </h1>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold ">
              I'm working as a{" "}
              <span className="text-2xl md:text-2xl font-heading font-semibold ">
                <TypeAnimation
                  sequence={[
                    "Freelancer",
                    1000,
                    "Backend Developer",
                    2000,
                    "Frontend Developer",
                    () => {
                      console.log("Sequence completed");
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </h3>
            <p className="text-1xl font-heading font-normal">
              I am a passionate and detail-oriented Full-Stack Developer with a
              Bachelor's degree in Computer Science from the University of Pune.
              My academic background and professional experience have equipped
              me with a strong foundation in both front-end and back-end
              development, allowing me to build dynamic, scalable, and
              user-friendly web applications.
            </p>
            <p className="text-1xl font-heading font-normal">
              Outside of my professional role, I build and contribute to
              meaningful web development projects to expand my practical
              knowledge and stay ahead in tech trends.
            </p>

            <button className="font-heading w-fit border border-primaryColor text-sm font-semibold outline-none px-6 py-2 rounded">
              Download CV
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              src={MyPhoto}
              alt=""
              className="w-full md:w-[50%] h-full rounded-xl "
            />
          </div>{" "}
        </div>
      </section>
      <section className="bg-footerBgTwo" id="services">
        <div className="lg:px-20 md:px-10 px-5 py-6">
          <Services />
        </div>
      </section>
      <section className="lg:px-20 md:px-10 px-5 " id="portfolio">
        <Portfolio />
      </section>
      <section className="lg:px-20 md:px-10 px-5" id="testimonials">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl md:text-3xl font-heading font-semibold ">
              Testimonials
            </h1>
            <p className="text-sm text-neutral-600 font-paragraph font-medium ">
              Hear what clients and collaborators say about working with me —
              from building seamless user experiences to delivering projects on
              time and beyond expectations. Your success is my mission.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {Testi.map((item, index) => {
              return (
                <div className="bg-[#000] p-8 rounded-2xl flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <img src={Vector} alt="vector" />
                    <h1 className="font-heading text-1xl font-semibold text-secondaryColor">
                      {item.name}
                    </h1>
                  </div>
                  <p className="font-paragraph text-sm text-paragraphColor">
                    {item.decs}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-footerBgTwo lg:px-20 md:px-10 px-5 py-5" id="vlog">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl md:text-3xl font-heading font-semibold ">
              Vlog
            </h1>
            <p className="text-sm text-neutral-600 font-paragraph font-medium ">
              When I'm not writing code, I'm out exploring the world. This vlog
              is a glimpse into my adventures — from mountain treks and scenic
              trails to travel stories and trekking videos. Join me on my
              journey beyond the screen.
            </p>
          </div>
          <BlogVideo />
        </div>
      </section>
      <section className="z-[999] fixed top-1/2 right-0">
        {/* Social Links */}
        <div className=" flex flex-col bg-blue-600 px-2 py-4 rounded-3xl gap-3 transform transition-all duration-1000 delay-1300 ">
          <a
            href="https://github.com/Pratik4412"
            target="_blank"
            className="text-gray-200 hover:text-black transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-dhere-full-stack-developer"
            target="_blank"
            className="text-gray-200 hover:text-black transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:pratik.dhere05@gmail"
            className="text-gray-200 hover:text-black transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </section>
      <section className="py-4 md:py-6 lg:py-10 px-4 md:px-6 lg:10   bg-gray-800">
        <Contack />
      </section>
    </div>
  );
};

export default Home;
