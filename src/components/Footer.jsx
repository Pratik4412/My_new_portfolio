import React from "react";
import { MdOutlineLocationOn, MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
const Footer = () => {


  
  return (
    <section className="bg-black py-5 md:py-11 lg:py-20 px-5 md:px-11 lg:px-20">
      <div className="flex flex-col md:gap-11 gap-7">
        <div className="flex items-start md:flex-row flex-col gap-5 justify-between">
          <div className="">
            <p className="md:text-md text-sm text-white md:w-[400px] w-full">
              Helping businesses grow with powerful, scalable web solutions.
              Specializing in custom websites, full-stack web apps, and digital
              products, delivering results as a Freelance Web Developer.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h4 className="text-white">
                <MdOutlineLocationOn size={18} />
              </h4>
              <p className="md:text-md text-sm text-white">Pune, Maharashtra</p>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="text-white">
                <MdOutlineMarkEmailUnread size={18} />
              </h4>
              <p className="md:text-md text-sm text-white">
                <a href="mailto:pratik.dhere05@gmail.com">
                  pratik.dhere05@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-100"></div>
        <div className="w-full flex items-center md:flex-row flex-col justify-between md:gap-3 gap-6">
          <div className="w-full flex items-center gap-3">
            <a
              href="https://github.com/Pratik4412"
              className="text-white hover:text-blue-500 transition-all"
              target="_blank"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/pratik-dhere-full-stack-developer"
              className="text-white hover:text-blue-500 transition-all"
              target="_blank"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/pratik_dhere_patil"
              className="text-white hover:text-blue-500 transition-all"
              target="_blank"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://wa.me/9130316771"
              className="text-white hover:text-blue-500 transition-all"
              target="_blank"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
          <div className="w-full flex items-center md:justify-end justify-center">
            <h4 className="md:text-md text-sm text-white">
              © Copyright 2025. All Rights Reserved.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
