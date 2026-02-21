

import React from 'react'
import Img1 from "/card1.svg"
import Img2 from "/card2.svg"
import Img3 from "/card3.svg"

function WhyUse() {

    const Items = [
        {
            img: Img1,
            taitel:"Your  entire  tripin one checkout!",
            text: "Add multiple experiences to your cart and checkout on one click.",
        },
        {
            img: Img2,
            taitel:"Pay with Crypto on the go",
            text: "Enjoy the freedom of universal payments for a seamless marketplace experience",
        },
        {
            img: Img3,
            taitel:"Free Cancellationand ticket transfer",
            text: "Resell your tickets or cancel your reservations at zero cost 24 hours before.",
        },

    ]

    return (
    <>
    <section className='mt-10 mb-5'>
        <h1 className='text-2xl md:text-3xl font-bold m-2 text-center py-2'>Why Use Chillsbay?</h1>

        <div className='mx-auto container bg-[#F5FAFF] px-4 py-2 rounded-xl'>
            
            <div className='grid grid-cols-1 sm:grid-cols-3 mt-10 px-4 mb-5 place-items-center'>
                {Items.map((item , i)=>(
                    <div key={i} className='transition-transform duration-300 ease-in-out 
             hover:scale-105'>
                        <img className='w-35 h-25 mb-5 mx-auto ' src={item.img} alt="" />
                        <div className='md:w-70 mb-5 text-center'>
                            <h3 className='font-bold sm:text-xl mb-2'>{item.taitel}</h3>
                            <p className='text-lg '>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
    )
}

export default WhyUse;