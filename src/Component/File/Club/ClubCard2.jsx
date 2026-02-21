



import React from 'react'
import Card1 from "/clubCard1.png";
import Card2 from "/clubCard2.png";
import Card3 from "/clubCard3.png";
import Card4 from "/clubCard4.png";



import { Button } from '@heroui/button'

function ClubCard2() {

    const EatData = [
        {
            img :Card1,
            headLine:" Slow Lagos",
            titel : "2 Musa Yar’Adua, Lagos Nigeria ",

        },
        {
            img :Card2,
            headLine:" Nok by Alara",
            titel : "2 Musa Yar’Adua, Lagos Nigeria ",

        },
        {
            img :Card3,
            headLine:" Noir",
            titel : "2 Musa Yar’Adua, Lagos Nigeria ",

        },
        {
            img :Card4,
            headLine:" Soho",
            titel : "2 Musa Yar’Adua, Lagos Nigeria ",

        },

    ]

    return (
    <>
    <section className='mx-auto  justify-center items-center m-10 py-10  bg-[#F5FAFF]'>

        <div className='flex justify-between px-20 items-center  mb-2'>
            <h1 className='text-start text-xl font-semibold text-[#000000] container'>Bars and Night clubs near you</h1>
            <p className='text-end font-semibold text-[#0E8BFF] container'>Seel All </p>

        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 container mx-auto px-4 py-2'>
            {EatData.map((item, i)=>(
                <div key={i}  className='transition-transform duration-300 ease-in-out 
                hover:scale-105'>
                    <img src={item.img} alt="" />
                    <h1 className='text-xl font-bold m-2 '>{item.headLine}</h1>
                    <p className='m-1 text-medium'>{item.titel}</p>
                    <p className='m-1 text-sm mb-3'>{item.point}</p>

                    <div className='flex justify-around items-center mb-3 '>

                        <div className='flex justify-center items-center gap-1'>
                            <img src="/Calendar.svg" alt="logo"  className='w-4 h-4'/>
                            <p className='text-[10px]'>Mondays-Friday</p>
                        </div>

                        <div className='flex justify-center items-center gap-1'>
                            <img src="/Clock.svg" alt="logo"  className='w-4 h-4'/>
                            <p className='text-[10px]'>10:00 AM - 12:00 PM</p>
                        </div>
                    </div>

                    <Button color='primary' >Reserve Now</Button>
                    
                </div>
            ))}
        </div>
    </section>
    </> 
    )
}

export default ClubCard2;