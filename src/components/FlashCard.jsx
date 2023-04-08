import React from "react";
import tp1 from "../assets/1.png";
import "../App.css";
import { TbShoppingBag } from "react-icons/tb";
import { RiArrowUpDownLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper";

const FlashCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className=" w-auto border lg:mr-0 md:mr-3 sm:mr-3 tricksCard">
        <figure className="">
          <div className="tag">
            <p className="">{item.tag}</p>
          </div>
          <img
            src={item.image[1].img}
            alt="Shoes"
            className="rounded-xl normalImage"
          />
        </figure>
        <div className="sliderVis">
          <Swiper
            spaceBetween={30}
            hashNavigation={{
              watchState: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, HashNavigation]}
            className="mySwiper"
          >
            {item.image.map((imgSrc, i) => (
              <SwiperSlide data-hash="slide1">
                <img src={imgSrc.img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="p-3">
          <p className="text-slate-400 text-[12px]">{item.title}</p>
          <p className="text-[16px]">{item.desc}</p>
          <div className="showPrice">
            <div className="flex py-3">
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
            <div className="flex mb-3">
              <span className="text-[16px] font-bold text-[#5B9982]">
                ${item.price}
              </span>
              <span className="text-slate-400 text-[12px] line-through">
                {" "}
                $3000.00
              </span>
            </div>
          </div>
          <div className=" mx-auto itemVisible">
            <div className="flex  ">
              <div className="ms-3">
                <AiOutlineEye className="text-5xl py-3 border-r-2 hover:bg-black hover:text-white rounded" />
              </div>
              <div className="">
                <AiOutlineHeart className="text-5xl py-3 border-r-2  hover:bg-black hover:text-white rounded" />
              </div>
              <div className="">
                <RiArrowUpDownLine className="text-5xl py-3  hover:bg-black hover:text-white rounded" />
              </div>
            </div>
          </div>
          <div className="">
            <button className="cardBtn flex justify-center justify-items-center gap-2 py-3 text-green-600">
              Add To Cart <TbShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
