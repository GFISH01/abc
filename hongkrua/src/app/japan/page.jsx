import React from "react";
import Card from "../component/card/page";
import Navbar from "../component/navbar/page";
import Footer from "../component/footer/page";
import data from "../component/fakedata/fooddata";
export default function home() {
    const japan = data
    .filter((card) => card.kind === 'อาหารคาว')
    .filter((card) => card.nation === 'JP')
    .map((card, index) => (
      <Card
        key={index}
        title={card.title}
        img={card.img}
        flag={card.flag}
        url={card.tag}
        rating={card.rating}
        ratingCount={card.ratingCount}
      />
    ));


    return (
        <>
            <Navbar />
            <div className=" px-2 2xl:px-64 xl:px-10 md:px-40 ">
                <div className="text-5xl font-extrabold">
                    <h1>สูตรอาหาร</h1>
                </div>
                <div className=" container mx-auto mt-[24px]">
                    <div className="grid grid-cols-4 ">
                        {japan}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
