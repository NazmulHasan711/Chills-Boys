

import React from 'react'
import Img1 from "/contactCard1.png"
import Img2 from "/contactCard2.png"
import Img3 from "/contactCard3.png"

function Card() {

    const CardData= [
        {
            img: Img1,
            title: "Become an Influencer",
            description: "Join a company that’s passionate about design and technology",
            link: "chills@chillsbay.com"
        },
        {
            img: Img2,
            title: "Need Help?",
            description: "Questions about using  Market? Our support team is here to help.",
            link: "chills@chillsbay.com"
        },
        {
            img: Img3,
            title: "Refunds & Others",
            link: "chills@chillsbay.com"
        },

    ]
    return (
    <>
    <section className=''>
        <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto gap-10 justify-center items-center m-20'>
            {CardData.map((item , i)=>(
                <div key={i} className='shadow-xl p-5 rounded-2xl flex flex-col gap-5 justify-center items-center text-center mt-5 sm:w-80 w-full h-80'>

                <img src={item.img} alt="" />

                <h1 className='font-bold text-2xl'>{item.title}</h1>

                <p>{item.description}</p>

                <a href="" className='text-blue-500 font-bold'>{item.link}</a>
                </div>
            ))}
        </div>
    </section>
    </>
    )
}

export default Card