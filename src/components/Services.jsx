import React from "react";
import { cn } from "@/lib/utils";
import {
  TbTerminal2,
  TbDeviceMobileCode,
  TbApiApp,
  TbPaint,
  TbDatabase,
  TbCloudComputing,
  TbBulb,
  TbUserHeart,
} from "react-icons/tb";

const Services = () => {
  const Feature = ({ title, description, icon, index }) => {
    return (
      <div
        className={cn(
          "flex flex-col lg:border-r py-5 md:py-10 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 font-heading">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 font-paragraph">
          {description}
        </p>
      </div>
    );
  };
  const features = [
    {
      title: "Full-Stack Developer",
      description:
        "I build dynamic, scalable web applications using the MERN stack—MongoDB, Express.js, React.js, and Node.js.",
      icon: <TbTerminal2 />,
    },
    {
      title: "Responsive Design",
      description:
        "Crafting mobile-first, user-centric interfaces that look great on every device using CSS3, TailwindCSS, and Bootstrap.",
      icon: <TbDeviceMobileCode />,
    },
    {
      title: "Creative UI/UX",
      description:
        "Designing sleek, intuitive user experiences that balance aesthetics with functionality.",
      icon: <TbPaint />,
    },
    {
      title: "Database & API Integration",
      description:
        "Seamless data handling with MongoDB, Mongoose, and custom-built REST APIs to power your application logic.",
      icon: <TbDatabase />,
    },
    {
      title: "Cloud & Deployment",
      description:
        "Deploying and managing apps on AWS with reliability, scalability, and performance in mind.",
      icon: <TbCloudComputing />,
    },
    {
      title: "Freelance Expertise",
      description:
        "Delivering high-quality freelance solutions tailored to client needs, timelines, and budgets.",
      icon: <TbUserHeart />,
    },
    {
      title: "Problem Solving & Innovation",
      description:
        "I love tackling complex problems with clean, maintainable code and fresh ideas.",
      icon: <TbBulb />,
    },
    {
      title: "API-Driven Development",
      description:
        "Integrating third-party services and building custom APIs to enhance app functionality.",
      icon: <TbApiApp />,
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-2xl md:text-3xl font-heading font-semibold ">
          Services
        </h1>
        <p className="text-sm text-neutral-600 font-paragraph font-medium ">
          I offer full-stack web development services tailored to your business
          needs — from crafting stunning front-end interfaces to building
          powerful, scalable back-end systems. Whether you're a startup, agency,
          or entrepreneur, I’m here to turn your ideas into impactful digital
          experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-5 md:py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
