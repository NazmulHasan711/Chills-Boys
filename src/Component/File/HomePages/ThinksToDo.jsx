

import React from "react";

import Imgs1 from "/image1.svg"
import Imgs2 from "/image2.svg"
import Imgs3 from "/image3.svg"

function ThinksToDo() {
  const Cards = [
    {img:Imgs1 , text:"Wizkid Show" },

    {img:Imgs2 , text:"Volley Ball Game" },

    {img:Imgs3 , text:"Sight Seeing" },

    {img:Imgs1 , text:"TWizkid Show" },

    {img:Imgs1 , text:"Volley Ball Game" },

    {img:Imgs2 , text:"Sight Seeing" },

    {img:Imgs3 , text:"Wizkid Show" },

    {img:Imgs1 , text:"Volley Ball Game" },

  ];

  return (
    <>
      
        <section className="bg-[#F5FAFF] px-4 py-2">
            <div className="mx-auto container mt-10 px-6">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center md:text-start">Top things to do in Lagos</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 items-start">
            {Cards.map((item ,i)=>(
                <div key={i} className="mt-5 overflow-hidden flex flex-col place-items-center transition-transform duration-300 ease-in-out 
                hover:scale-105">
                    <img src={item.img} alt="" className="w-40 md:w-full h-30 md:h-40 rounded-2xl"/>
                    <h1 className="text-center font-bold mb-5">{item.text}</h1>
                </div>
            ))}
        </div>
      
        </div>
        </section>
    </>
  );
}

export default ThinksToDo;
