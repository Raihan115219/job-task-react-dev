import React from "react";
import Trending from "../../components/Trending";
import {
  cosmeticsForWinter,
  fashionForWomen,
  foodForHealth,
} from "../../assets/TrendingProductData/TrendingProduct";

const TrendingProduct = () => {
  return (
    <section className="py-3">
      <div className="TP_heading">
        <h2>
          <span className="font-bold text-3xl text-black">Trending</span>{" "}
          <span className="text-3xl text-black"> Product</span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-flow-cols-1 gap-6">
        <Trending
          data={fashionForWomen}
          heading="Fashion"
          heading2="For Women"
        />
        <Trending data={foodForHealth} heading="Food" heading2="For Health" />
        <Trending
          data={cosmeticsForWinter}
          heading="Cosmetics"
          heading2="For Winter"
        />
      </div>
    </section>
  );
};

export default TrendingProduct;
