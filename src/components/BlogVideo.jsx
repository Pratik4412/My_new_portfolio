import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import One from "../assets/pawna1.webp";
import two from "../assets/pawna2.webp";
import three from "../assets/pawna3.webp";
import four from "../assets/pawna4.jpeg";
import five from "../assets/pawna5.webp";
import six from "../assets/pawna6.webp";
import seven from "../assets/pawna7.webp";
import eight from "../assets/pawna8.webp";
import nine from "../assets/pawna9.webp";
import nature_1 from "../assets/nature-1.webp";
import nature_2 from "../assets/nature-2.webp";
import nature_3 from "../assets/nature-3.webp";
import nature_4 from "../assets/nature-4.webp";
import nature_5 from "../assets/nature-5.webp";
import nature_6 from "../assets/nature-6.webp";
import nature_7 from "../assets/nature-7.webp";
import nature_8 from "../assets/nature-8.webp";
import nature_9 from "../assets/nature-9.webp";
import nature_10 from "../assets/nature-10.webp";
import {
  TbArrowWaveRightUp,
  TbFileBroken,
  TbSignature,
  TbTableColumn,
} from "react-icons/tb";
import { GiCampingTent } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const VimeoVideo = ({ videoId, title }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const cleanVideoId = videoId.split("/")[0];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-xl object-cover"
    >
      <div
        className={`w-full h-full min-h-32 object-cover ${
          isLoading ? "bg-neutral-100 dark:bg-neutral-800 object-cover" : ""
        }`}
      >
        <iframe
          src={`https://player.vimeo.com/video/${cleanVideoId}?autoplay=${
            isVisible ? "1" : "0"
          }&loop=1&background=1`}
          title={title || "Vimeo Video"}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full aspect-video rounded-xl"
          onLoad={() => setIsLoading(false)}
        ></iframe>
      </div>
    </div>
  );
};
const SmoothScrollingImages = ({ images, title }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const animationRef = useRef(null);

  useEffect(() => {
    const startScrolling = () => {
      if (!scrollRef.current || isPaused) return;

      const container = scrollRef.current;
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.offsetWidth;
      const maxScroll = scrollWidth - containerWidth;

      if (container.scrollLeft >= maxScroll) {
        // Reset to beginning smoothly
        container.style.scrollBehavior = "auto";
        container.scrollLeft = 0;
        container.style.scrollBehavior = "smooth";
      } else {
        container.scrollLeft += scrollSpeed;
      }

      animationRef.current = requestAnimationFrame(startScrolling);
    };

    animationRef.current = requestAnimationFrame(startScrolling);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, scrollSpeed]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleManualScroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.8; // Scroll by 80% of container width

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Arrows */}
      <button
        onClick={() => handleManualScroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <IoIosArrowBack className="w-4 h-4" />
      </button>

      <button
        onClick={() => handleManualScroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <IoIosArrowForward className="w-4 h-4" />
      </button>

      {/* Scrolling Container */}
      <div
        className="flex gap-4 overflow-x-hidden scrollbar-hide"
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Duplicate images for seamless loop */}
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} ${(index % images.length) + 1}`}
            className="w-64 h-[164px] object-cover rounded-xl flex-shrink-0 transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>

      {/* Speed Control (Optional) */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-1 bg-black/50 rounded-full p-1">
          <button
            onClick={() => setScrollSpeed(0.5)}
            className={`px-2 py-1 text-xs rounded-full transition-colors ${
              scrollSpeed === 0.5
                ? "bg-white text-black"
                : "text-white hover:bg-white/20"
            }`}
          >
            Slow
          </button>
          <button
            onClick={() => setScrollSpeed(1)}
            className={`px-2 py-1 text-xs rounded-full transition-colors ${
              scrollSpeed === 1
                ? "bg-white text-black"
                : "text-white hover:bg-white/20"
            }`}
          >
            Normal
          </button>
          <button
            onClick={() => setScrollSpeed(2)}
            className={`px-2 py-1 text-xs rounded-full transition-colors ${
              scrollSpeed === 2
                ? "bg-white text-black"
                : "text-white hover:bg-white/20"
            }`}
          >
            Fast
          </button>
        </div>
      </div>
    </div>
  );
};
const BlogVideo = (props) => {
  const scrollRef = useRef();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (scrollRef.current) {
  //       const container = scrollRef.current;
  //       const scrollWidth = container.scrollWidth;
  //       const currentScroll = container.scrollLeft;
  //       const containerWidth = container.offsetWidth;

  //       // Check if we're at the end
  //       if (currentScroll + containerWidth >= scrollWidth - 1) {
  //         container.scrollLeft = 0;
  //       } else {
  //         container.scrollLeft += 1;
  //       }
  //     }
  //   }, 6); // Adjust speed here

  //   return () => clearInterval(interval);
  // }, []);
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const vimeoVideos = [
    {
      videoId: "1086045896",
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      icon: <TbArrowWaveRightUp className="h-6 w-6 text-neutral-500" />,
    },
    {
      imgesId: [
        two,
        One,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        nature_3,
        nature_4,
        nature_5,
        nature_6,
        nature_7,
        nature_8,
        nature_9,
        nature_10,
      ],
      title: "Camping at Pawna Lake",
      description:
        "Experience the serenity of nature with our Pawna Lake camping adventure — from starlit skies and lakeside tents to cozy bonfires and sunrise views. A peaceful escape just a few hours from Pune.",
      icon: <GiCampingTent className="h-6 w-6 text-neutral-500" />,
    },
    {
      videoId: "1086046324",
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      icon: <TbSignature className="h-6 w-6 text-neutral-500" />,
    },
    {
      imgesId: nature_1,
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      icon: <TbTableColumn className="h-6 w-6 text-neutral-500" />,
    },
    {
      imgesId: nature_2,
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      icon: <TbFileBroken className="h-6 w-6 text-neutral-500" />,
    },
  ];
  const items = vimeoVideos;
  return (
    <div className="">
      <BentoGrid className="">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              item.videoId ? (
                <VimeoVideo videoId={item.videoId} title={item.title} />
              ) : Array.isArray(item.imgesId) ? (
                <SmoothScrollingImages
                  images={item.imgesId}
                  title={item.title}
                />
              ) : (
                <img
                  src={item.imgesId}
                  alt={item.title}
                  className="w-full h-[180px] object-cover rounded-xl"
                />
              )
            }
            icon={item.icon}
            className={i === 1 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default BlogVideo;
// import { cn } from "@/lib/utils";
// import React, { useState, useRef, useEffect } from "react";
// import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
// import One from "../assets/pawna1.webp";
// import two from "../assets/pawna2.webp";
// import three from "../assets/pawna3.webp";
// import four from "../assets/pawna4.jpeg";
// import five from "../assets/pawna5.webp";
// import six from "../assets/pawna6.webp";
// import seven from "../assets/pawna7.webp";
// import eight from "../assets/pawna8.webp";
// import nine from "../assets/pawna9.webp";
// import nature_1 from "../assets/nature-1.webp";
// import nature_2 from "../assets/nature-2.webp";
// import nature_3 from "../assets/nature-3.webp";
// import nature_4 from "../assets/nature-4.webp";
// import nature_5 from "../assets/nature-5.webp";
// import nature_6 from "../assets/nature-6.webp";
// import nature_7 from "../assets/nature-7.webp";
// import nature_8 from "../assets/nature-8.webp";
// import nature_9 from "../assets/nature-9.webp";
// import nature_10 from "../assets/nature-10.webp";
// import {
//   TbArrowWaveRightUp,
//   TbFileBroken,
//   TbSignature,
//   TbTableColumn,
// } from "react-icons/tb";
// import { GiCampingTent } from "react-icons/gi";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// const VimeoVideo = ({ videoId, title }) => {
//   const containerRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const cleanVideoId = videoId.split("/")[0];

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-full overflow-hidden rounded-xl object-cover"
//     >
//       <div
//         className={`w-full h-full min-h-32 object-cover ${
//           isLoading ? "bg-neutral-100 dark:bg-neutral-800 object-cover" : ""
//         }`}
//       >
//         <iframe
//           src={`https://player.vimeo.com/video/${cleanVideoId}?autoplay=${
//             isVisible ? "1" : "0"
//           }&loop=1&background=1`}
//           title={title || "Vimeo Video"}
//           frameBorder="0"
//           allow="autoplay; fullscreen; picture-in-picture"
//           allowFullScreen
//           className="w-full h-full aspect-video rounded-xl"
//           onLoad={() => setIsLoading(false)}
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// const BlogVideo = (props) => {
//   const scrollRef = useRef();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         const container = scrollRef.current;
//         const scrollWidth = container.scrollWidth;
//         const currentScroll = container.scrollLeft;
//         const containerWidth = container.offsetWidth;

//         // Check if we're at the end
//         if (currentScroll + containerWidth >= scrollWidth - 1) {
//           container.scrollLeft = 0;
//         } else {
//           container.scrollLeft += 1;
//         }
//       }
//     }, 6); // Adjust speed here

//     return () => clearInterval(interval);
//   }, []);
//   const Skeleton = () => (
//     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
//   );
//   const vimeoVideos = [
//     {
//       videoId: "1086045896",
//       title: "The Pursuit of Knowledge",
//       description: "Join the quest for understanding and enlightenment.",
//       icon: <TbArrowWaveRightUp className="h-6 w-6 text-neutral-500" />,
//     },
//     {
//       imgesId: [
//         {
//           image_sub2: two,
//           image_sub: One,
//           image_sub3: three,
//           image_sub4: four,
//           image_sub5: five,
//           image_sub6: six,
//           image_sub7: seven,
//           image_sub8: eight,
//           image_sub9: nine,
//           image_sub10: nature_3,
//           image_sub11: nature_4,
//           image_sub12: nature_5,
//           image_sub13: nature_6,
//           image_sub14: nature_7,
//           image_sub15: nature_8,
//           image_sub16: nature_9,
//           image_sub17: nature_10,
//         },
//       ],
//       title: "Camping at Pawna Lake",
//       description:
//         "Experience the serenity of nature with our Pawna Lake camping adventure — from starlit skies and lakeside tents to cozy bonfires and sunrise views. A peaceful escape just a few hours from Pune.",
//       icon: <GiCampingTent className="h-6 w-6 text-neutral-500" />,
//     },
//     {
//       videoId: "1086046324",
//       title: "The Art of Design",
//       description: "Discover the beauty of thoughtful and functional design.",
//       icon: <TbSignature className="h-6 w-6 text-neutral-500" />,
//     },
//     {
//       imgesId: nature_1,
//       title: "The Power of Communication",
//       description:
//         "Understand the impact of effective communication in our lives.",
//       icon: <TbTableColumn className="h-6 w-6 text-neutral-500" />,
//     },
//     {
//       imgesId: nature_2,
//       title: "The Digital Revolution",
//       description: "Dive into the transformative power of technology.",
//       icon: <TbFileBroken className="h-6 w-6 text-neutral-500" />,
//     },
//   ];
//   const items = vimeoVideos;
//   return (
//     <div className="">
//       <BentoGrid className="">
//         {items.map((item, i) => (
//           <BentoGridItem
//             key={i}
//             title={item.title}
//             description={item.description}
//             header={
//               item.videoId ? (
//                 <VimeoVideo videoId={item.videoId} title={item.title} />
//               ) : Array.isArray(item.imgesId) ? (
//                 // If it's an array of objects with multiple images
//                 <div className="flex items-center ">
//                   <div
//                     className="scrollbarchck flex gap-4 container mx-auto overflow-x-scroll scrollbar-hide scroll-smooth"
//                     ref={scrollRef}
//                   >
//                     {Object.values(item.imgesId[0]).map((img, index) => (
//                       <img
//                         key={index}
//                         src={img}
//                         alt={`${item.title} ${index + 1}`}
//                         className="w-full  h-[164px] object-cover rounded-xl"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 // If it's a single image
//                 <img
//                   src={item.imgesId}
//                   alt={item.title}
//                   className="w-full h-[180px] object-cover rounded-xl"
//                 />
//               )
//             }
//             icon={item.icon}
//             className={i === 1 || i === 6 ? "md:col-span-2" : ""}
//           />
//         ))}
//       </BentoGrid>
//     </div>
//   );
// };

// export default BlogVideo;
