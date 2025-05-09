import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage(e) {
  console.log(e);
  return (
    <div className="w-full p-[10vmax] h-[100vh] flex flex-col justify-center items-center bg-[var(--bg-color)] text-[var(--text-color)]">
      
      <h1 className="text-[var(--accent-color)] text-[1.5rem] md:text-[4rem]">
        {"error, this page doesn't exist."}
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center m-10">
        <a
          className="text-[var(--text-color)] text-[2rem] navLinks logoNav"
          href="/"
        >
          आ<span className="accent text-[var(--accent-color)]">0.</span>
        </a>

        <Link to="/">
          <button className="text-[var(--text-color)] text-[1.4rem] border border-[var(--accent-color)] p-3 m-10 transition-all duration-300 rounded-sm hover:text-[var(--bg-color)] hover:font-bold hover:bg-[var(--accent-color)]">
            HOME
          </button>
        </Link>
      </div>
    </div>
  );
}
