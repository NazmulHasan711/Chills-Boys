

import React from 'react'
import Card4 from "/card4.svg"
import Card5 from "/card5.svg"
import Card6 from "/card6.svg"
import Card7 from "/card7.svg"
import Card8 from "/card8.svg"
import Card9 from "/card9.svg"


function PepoleChileng() {

    const Cards =[
        {
            Img : Card4
        },
        {
            Img : Card5
        },
        {
            Img : Card6
        },
        {
            Img : Card7
        },
        {
            Img : Card8
        },
        {
            Img : Card9
        },
    ]

    return (
    <>
    <section className='border border-gray-100 p-10 mb-10'>
        <h2 className='text-xl md:text-2xl font-bold mb-5'>See How people are chilling on <span className='text-[#0E8BFF]'>Chillsbay</span></h2>
        <div className='grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 container mx-auto justify-center items-center w-full'>
            {Cards.map((item,i)=>
            <div key={i} className='w-full justify-center items-center mx-auto transition-transform duration-300 ease-in-out 
            hover:scale-105'>
                <img className='rounded-md' src={item.Img} alt="" />
            </div>
            )}
        </div>
    </section>
    </>
    )
}

export default PepoleChileng;