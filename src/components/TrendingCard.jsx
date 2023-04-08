import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const TrendingCard = ({ item }) => {
  return (
    <div className="">
      <div className=" w-full card  lg:card-side bg-base-100 shadow-sm ">
        <figure>
          <img src={item.image} alt="Album" className="ps-5" />
        </figure>
        <div className="card-body p-6">
          <p className="text-slate-400 text-[12px]">{item.title}</p>
          <div className="flex">
            <span>
              <AiTwotoneStar className="text-yellow-300" />
            </span>
            <span>
              <AiTwotoneStar className="text-yellow-300" />
            </span>
            <span>
              <AiTwotoneStar className="text-yellow-300" />
            </span>
            <span>
              <AiTwotoneStar className="text-yellow-300" />
            </span>
            <span>
              <AiTwotoneStar className="text-yellow-300" />
            </span>
          </div>
          <p className="text-[16px]">{item.desc}</p>
          <div className="showPrice">
            <div className="flex">
              <span className="text-[16px] font-bold text-[#5B9982]">
                ${item.price}
              </span>
              <span className="text-slate-400 text-[12px] line-through">
                {" "}
                $3000.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
