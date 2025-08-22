import React from "react";
import logo from "../../../../public/slices.svg";
function Introduction() {
  return (
    <div>
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
        <strong>Gallery</strong> to explore all the components and utilities, or
        jump directly into a category from the sidebar{" "}
      </p>

      <h2 className="text-2xl text-[var(--text-color)] font-semibold mt-10">Recent Uploads</h2>
    </div>
  );
}

export default Introduction;
