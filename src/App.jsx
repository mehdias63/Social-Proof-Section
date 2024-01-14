import React from "react";
import Rate from "./components/Rate";
import Count from "./components/Count";

function App() {
  return (
    <main className=" flex flex-col justify-center items-center  min-h-screen px-4 font-leag">
      <section
        className="w-[23.4375rem] h-[95.625rem] lg:w-[90rem] lg:h-[50rem] bg-[url(../public/images/bg-pattern-bottom-mobile.svg)] bg-no-repeat bg-cover 
        lg:bg-[url(../public/images/bg-pattern-bottom-desktop.svg)] lg:flex lg:flex-col"
      >
        <div className="lg:flex items-center">
          <div className="bg-[url(../public/images/bg-pattern-top-mobile.svg)] bg-no-repeat bg-contain lg:bg-[url(../public/images/bg-pattern-top-desktop.svg)] lg:px-[2rem]lg:pr-[5rem]">
            <h1 className="text-[#512051] text-[2.5rem] font-bold leading-8 tracking-[-0.08931rem] py-10 px-8 text-center lg:px-[10rem] lg:ml-12 lg:text-left lg:text-[3.5rem] lg:leading-[3rem] lg:tracking-[-0.125rem]">
              10,000+ of our users love our products.
            </h1>
            <p className="text-[#927B91] font-medium leading-[1.5625rem] tracking-[-0.03956rem] py-4 px-12 text-center lg:px-[6rem] lg:ml-[7rem] lg:text-left lg:text-[1.1875rem]">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="mt-8 lg:mr-[12rem] lg:mt-[rem]">
            <Rate description="Rated 5 Stars in Reviews" />
            <Rate description="Rated 5 Stars in Report Guru" />
            <Rate description="Rated 5 Stars in BestTech" />
          </div>
        </div>
        <div className=" lg:flex lg:justify-center">
          <Count
            title="Colton Smith"
            icon="./images/image-colton.jpg"
            text="“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”"
          />
          <Count
            title="Irene Roberts"
            icon="./images/image-irene.jpg"
            text="“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”"
          />
          <Count
            title="Anne Wallace"
            icon="./images/image-anne.jpg"
            text="“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
