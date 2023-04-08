import React from "react";
import TrendingCard from "./trendingCard";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Trending = ({ data, heading, heading2 }) => {
  return (
    <section className="py-3">
      <div className="fashion_women py-2">
        <div className="flex justify-between justify-items-center">
          <h1 className="">
            <span className="font-bold text-xl ">{heading}</span> {heading2}
          </h1>
          <div className="icons">
            <span>
              {" "}
              <BiLeftArrowAlt className="text-3xl font-bold" />
            </span>
            <span>
              <BiRightArrowAlt className="text-3xl font-bold bg-black border rounded-full text-white p-1" />
            </span>
          </div>
        </div>
        <div>
          <div>
            {data?.map((item, index) => (
              <div className="py-2">
                <TrendingCard item={item} key={index} />
              </div>
            ))}
          </div>
          <button className="btn w-full bg-black text-white">View All</button>
        </div>
      </div>
    </section>
  );
};

export default Trending;
