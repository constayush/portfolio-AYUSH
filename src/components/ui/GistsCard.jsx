import React from "react";
import right_arrow from "../../../public/right-arrow.svg";
import { Link } from "react-router-dom";
function GistsCard(props) {



  return (

    <Link state={props.gist}  to={"/slices"} className="card relative grow overflow-hidden porject-card min-h-full group  min-w-[100%] transition-all bg-[var(--glass-bg-color)] text-[var(--text-color)] group border-2 shadow-2xl border-[#ffffff10] rounded-lg ">
      <div className="shine"></div>
      <span className="flex flex-wrap justify-between">
        <h1 className=" text-[1.4rem] opacity-[.9]  font-medium  ">
          # {props.gistName}
        </h1>
        <img
          src={right_arrow}
          className="w-[2rem] shadow-2xl   grayscale group-hover:border-[#ff8400] border border-[#fff0] rounded-full p-1 transition duration-300 "
          alt="->"
        />
      </span>
      <p>{props.gistShortDescription}</p>

      <div className="flex gap-2 flex-wrap">
        {props?.gistTags?.map((tag) => {
          return (
            <span className="tag  border border-[var(--border-color)] hover:bg-[#636363a4] text-[.75rem] rounded-3xl px-3 py-1">
              {tag}
            </span>
          );
        })}
      </div>
    </Link>
  );
}

export default GistsCard;
