import React from "react";

import Card1 from "/Shadow1.svg";
import Card2 from "/Shadow2.svg";
import Card3 from "/Shadow3.svg";
import Card4 from "/Shadow4.svg";

function FastCard() {
  const Cards = [
    {img:Card1 , text:"Eat & Drink" },

    {img:Card2 , text:"Events" },

    {img:Card3 , text:"Club" },

    {img:Card4 , text:"Things to do" },

  ];

  return (
    <>
      <section className="mt-10 container mx-auto justify-center items-center">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">What are you in the mood for?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 items-start">
            {Cards.map((item ,i)=>(
                <div key={i} className="mt-10 overflow-hidden flex flex-col transition-transform duration-300 ease-in-out 
                hover:scale-105">
                    <img src={item.img} alt="" className="rounded-2xl w-full h-auto block"/>
                    <h1 className="text-center font-bold mb-5">{item.text}</h1>
                </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default FastCard;
