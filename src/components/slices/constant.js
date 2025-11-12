// helper to keep slugs consistent
export const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
  

// Sidebar sections
export const slices_data = [
  {
    title: "Getting Started",
    components: ["Introduction", "Gallery"],
  },
  {
    title: "Scroll",
    components: ["Image-Grid-Zoom", "Text-Opacity", "Navbar-Shrink"],
  },
  {
    title: "Mouse",
    components: ["Custom-Cursor", "Cards-on-Hover"],
  },
  {
    title: "Utilities",
    components: ["useSwipe", "useDebounce", "useClickOutside", "useDarkMode", "Scroll To Top"],
  },
];

// Blog data mapped by slug
export const componentBlogs = {
  "image-grid-zoom": {
    title: "Gallery Component",
    description: "A responsive grid gallery with zoom-in effects.",
   
    steps: [
      "Create a `Gallery` component inside `/components/Gallery`.",
      "paste the below code into the component.",
      "pass an array of image URLs as props.",
      "edit styles as needed.",
    ],
    codeSnippet: `
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
    
function GallerySection({images}) {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Scroll progress for entire gallery
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  // Shared transforms
  const baseScale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  const baseX = useTransform(scrollYProgress, [0, 1], [0, -100]); // for subtle parallax drift

  // Gallery image configs with offsets for depth


  const pictures = [
    {
      src: images[0],
      offset: 0.6,
      direction: "left",
      classes:
        "w-[50vw] md:w-[25vw] h-[40vh] top-[1vh] md:top-[-1vh] left-[6vh] md:left-[4vw] shadow-3xl",
    },
    {
      src: images[1],
      offset: 0.1,
      direction: "right",
      classes:
        "top-[-30vh] md:top-[-22vh] right-[-12vw] md:right-[-20vw] w-[39vw] md:w-[12vw] h-[15vh] md:h-[30vh]",
    },
    {
      src: images[2],
      offset: 0.2,
      direction: "left",
      classes:
        "top-[-30vh] md:top-[-18vh] md:left-[-23vw] left-[-18vw] w-[25vw] md:w-[15vw] h-[15vh] md:h-[30vh]",
    },
    {
      src: images[3],
      offset: 0.3,
      direction: "right",
      classes:
        "left-[27.5vw] w-[20vw] h-[25vh] md:left-[38vw]  top-[-4.5vh] md:top-[22vh]",
    },
    {
      src: images[4],
      offset: 0.4,
      direction: "up",
      classes:
        "top-[32vh] left-[2vw] w-[25vw] md:w-[18vw] h-[25vh] md:left-[37vw] md:top-[-16vh]",
    },
    {
      src: images[5],
      offset: 0.5,
      direction: "left",
      classes:
        "top-[27.5vh] left-[-30vw] w-[25vw] md:w-[12vw] h-[39vh] md:top-[22vh] md:left-[-16vw]",
    },
    {
      src: images[6],
      offset: 0.6,
      direction: "right",
      classes:
        "top-[22.5vh] left-[30vw] md:w-[15vw] w-[25vw] h-[35vh] md:top-[17vh] md:left-[15vw]",
    },
    {
      src: images[7],
      offset: 0.7,
      direction: "up",
      classes:
        "top-[0vh] left-[-26vw] md:left-[-35vw] md:top-[17vh] w-[15vw] h-[30vh] md:h-[60vh]",
    },
  ];

  return (
    <motion.div
      style={{ scale }}
      ref={galleryRef}
      className="relative h-[300vh] top-[-50vh] w-full"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#202020]  rounded-t-[3rem]">
        <img
          src={paperTex}
          alt="Paper texture overlay"
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay pointer-events-none"
        />

        {pictures.map(({ src, offset, direction, classes }, index) => {
          const localScale = useTransform(
            baseScale,
            (v) => 1 + (v - 1) * (1 + offset)
          );

          const localX = useTransform(baseX, (v) =>
            direction === "left"
              ? v * (1 + offset * 1.5)
              : direction === "right"
              ? -v * (1 + offset * 1.5)
              : 0
          );

          const localY = useTransform(
            scrollYProgress,
            [0, 1],
            [0, direction === "up" ? -150 : 0]
          );

          return (
            <motion.div
              key={index}
              style={{
                scale: localScale,

                x: localX,
                y: localY,
                zIndex: 10 - index,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className={relative $ {classes}}>
                <img
                  src={src}
                  alt={gallery- $ {index}}
                  className="object-cover w-full h-full rounded-3xl shadow-2xl border border-black/20"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}`,
usage: `<GallerySection images={images_array} />`,
  },

  "cards-on-hover": {
    title: "Card Component",
    description: "A flexible card with image, title, and description.",
   
    steps: [
      "Create `Card.jsx` inside `/components/Card`.",
      "Add `img`, `title`, `desc` props.",
      "Wrap content inside a styled container.",
      "Use hover effects to lift image.",
    ],
    codeSnippet: `function Card({ title, description, img }) {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <img src={img} alt={title} className="rounded-md hover:-translate-y-2 transition" />
      <h2 className="mt-2 font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}`,
  },

  // 👇 stubs so UI never breaks
  "text-opacity": {
    title: "Text Opacity",
    description: "A simple fade-in text effect on scroll.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "navbar-shrink": {
    title: "Navbar Shrink",
    description: "Navbar shrinks when scrolling down.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "custom-cursor": {
    title: "Custom Cursor",
    description: "Follow mouse with a styled custom cursor.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "useSwipe": {
    title: "useSwipe Hook",
    description: "Detect swipe gestures in React.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "usedebounce": {
    title: "useDebounce Hook",
    description: "Debounce input or actions easily.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "useclickoutside": {
    title: "useClickOutside Hook",
    description: "Detect clicks outside of an element.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "usedarkmode": {
    title: "useDarkMode Hook",
    description: "Toggle dark mode with persistence.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "scroll-to-top": {
    title: "Scroll To Top",
    description: "Button to smoothly scroll to top of page.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
};
