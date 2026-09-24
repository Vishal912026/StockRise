import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/media/images/kite.png"
        productName="Rise Trade"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Rise Trade experience seamlessly on the web."
        tryDemo="/signup"
        learnMore="/signup"
      />
      <RightSection
        imageURL="/media/images/console.png"
        productName="Rise Console"
        productDesription="The central dashboard for your StockRise account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/signup"
      />
      <LeftSection
        imageURL="/media/images/coin.png"
        productName="Rise Funds"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account."
        tryDemo="/signup"
        learnMore="/signup"
      />
      <RightSection
        imageURL="/media/images/kiteconnect.png"
        productName="Rise API"
        productDesription="Build powerful trading experiences with simple HTTP/JSON APIs. Connect your own apps and strategies to StockRise."
        learnMore="/signup"
      />
      <LeftSection
        imageURL="/media/images/varsity.png"
        productName="Rise Learn"
        productDesription="An easy to grasp collection of stock market lessons with in-depth coverage and illustrations, broken down into bite-size cards."
        tryDemo="/signup"
        learnMore="/signup"
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? See the section below.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;