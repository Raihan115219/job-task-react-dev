import "./App.css";
import FlashSale from "./Sections/FlashSale/FlashSale";
import TrendingProduct from "./Sections/TrendingProduct/TrendingProduct";

function App() {
  return (
    <div className="">
      <section className="flash_section container mx-auto my-6">
        <FlashSale />
      </section>
      <section className="trending-section my-3 ">
        <div className="container  mx-auto">
          {" "}
          <TrendingProduct />
        </div>
      </section>
    </div>
  );
}

export default App;
