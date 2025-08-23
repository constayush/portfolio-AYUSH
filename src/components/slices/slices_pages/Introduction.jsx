import { motion } from "framer-motion";
import logo from "../../../../public/slices.svg";
import SlicesDisplayCard from "../ui/SlicesDisplayCard";
import {Link} from "react-router-dom";
function Introduction() {
  const recent_slices = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  return (
    <motion.div>
      <h1 className="text-4xl text-[var(--text-color)] font-semibold  leading-relaxed">
        {" "}
        Welcome to Slices{" "}
        <span>
          <img className="max-w-8 inline" src={logo} alt="o" />
        </span>{" "}
        I'm Ayush and here I document my latest explorations.
      </h1>
      <p className="mt-10  text-[var(--slices-secondary-text)]">
        collection of React components, hooks, and utilities designed to help
        you build clean, modern interfaces quickly. Head over to{" "}
        <Link to="/slices/gallery"><strong className="underline">Gallery</strong></Link> to explore all the components and utilities, or
        jump directly into a category from the sidebar{" "}
      </p>

      <h2 className="text-2xl text-[var(--text-color)] font-semibold mt-10">
        Recent Uploads
      </h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {recent_slices.map((slice) => {
          return <SlicesDisplayCard />;
        })}
      </div>
    </motion.div>
  );
}

export default Introduction;
