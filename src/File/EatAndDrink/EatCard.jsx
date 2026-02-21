

import React from 'react'
import Card1 from "/EitCard1.svg";
import Card2 from "/EitCard2.svg";
import Card3 from "/EitCard3.svg";
import Card4 from "/EitCard4.svg";


import { Button } from '@heroui/button'

function EatCard() {

    const EatData = [
        {
            img :Card1,
            headLine:" Slow Lagos",
            titel : "2 Musa Yar’Adua, Lagos Nigeria ",
            point : "African Italian Asian Continental"
        },
        {
            img :Card2,
            headLine:" Nok by Alara",
            titel : "2 Musa Yar’Adua, Lagos Nigeria ",
            point : "African Italian Asian Continental"
        },
        {
            img :Card3,
            headLine:" Noir",
            titel : "2 Musa Yar’Adua, Lagos Nigeria ",
            point : "African Italian Asian Continental"
        },
        {
            img :Card4,
            headLine:" Soho",
            titel : "2 Musa Yar’Adua, Lagos Nigeria ",
            point : "African Italian Asian Continental"
        },

    ]

    return (
    <>
    <section className='mx-auto  justify-center items-center m-10 py-10  bg-[#F5FAFF]'>

        <p className='text-end font-semibold text-[#0E8BFF] container'>Seel All </p>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 container mx-auto px-4 py-2'>
            {EatData.map((item, i)=>(
                <div key={i}  className='transition-transform duration-300 ease-in-out 
                hover:scale-105'>
                    <img src={item.img} alt="" />
                    <h1 className='text-xl font-bold m-2 '>{item.headLine}</h1>
                    <p className='m-1 text-medium'>{item.titel}</p>
                    <p className='m-1 text-sm mb-3'>{item.point}</p>
                    <Button color='primary' >Reserve Now</Button>
                    
                </div>
            ))}
        </div>
    </section>
    </> 
    )
}

export default EatCard