import React from "react";
import add from "../../assets/add.png";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { flashSaleData } from "../../assets/FlashProductData/flashProductData";
import FlashCard from "../../components/FlashCard";
const FlashSale = () => {
  return (
    <section>
      <div>
        <div className="flex lg:flex-nowrap md:flex-wrap sm:flex-wrap">
          <div className=" lg:basis-4/5 md:basis-full sm:basis-full">
            <div className="title_bar py-5 flex justify-between justify-items-center">
              <div className="title flex mr-3">
                <h2>
                  <span className="font-bold text-3xl text-black">Flash</span>{" "}
                  <span className="text-xl text-black"> Sale Product</span>
                </h2>
                <div className="timer ms-5 font-bold">
                  <span>2D</span>:<span>15h</span>:<span>21m</span>:
                  <span>47s</span>
                </div>
              </div>
              <div className="flex">
                <span>
                  <BiLeftArrowAlt className="text-3xl font-bold" />
                </span>
                <span>
                  <BiRightArrowAlt className="text-3xl font-bold bg-black border rounded-full text-white p-1" />
                </span>
              </div>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-[10px]">
              {flashSaleData?.map((item, i) => (
                <FlashCard item={item} key={i} />
              ))}
            </div>
          </div>
          <div className="lg:basis-1/5 ml-3 md:basis-full sm:basis-full ">
            <div className="add">
              <img src={add} alt="add" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
