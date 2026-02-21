


import React, { useState } from 'react'
import Img from "/clubslide.png"
import Img2 from "/eitSlid.svg"
import Img3 from "/twoHand.svg"
import Clock from "/Clock.svg"
import  Location from "/Location.svg"
import Tag from "/Tag.svg"
import Calendar from "/Calendar.svg"
import { Button } from '@heroui/button'
import TW from "/Twitter.svg"
import IN from "/Instagram.svg"

function ClubSlide() {

    const Carosel = [
        {
            img: Img,
            Heding : "GTCO Food and Drink Festival 2022: Africa’s Biggest Food and Drink Festival",

            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            img: Img2,
            Heding : "Nazmul Hasan",

            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            img: Img3,
            Heding : "Meraj Hossen",

            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
    ]

    const DateAndTime = [
        {
            img : Calendar,
            text : "Dec 12 2022"
        },
        {
            img : Location,
            text : "N20,000"
        },
        {
            img : Clock,
            text : "9:00 PM "
        },
        {
            img : Tag,
            text : "N20,000"
        },
    ]

    const [Item , SetItem ] = useState(0)

    const Slider = Carosel[Item]

    const Prev = ()=>(
            SetItem((pre)=>(
                pre===0? Carosel.length -1 : pre -1 
            ))
    )

    const Next = ()=>(
        SetItem((pre)=>(
            pre===Carosel.length -1 ? 0 : pre +1
        ))
    )

    return (
    <>
    <section className='mt-5 container mx-auto'>

            <h1 className='text-medium sm:text-xl md:text-2xl font-bold text-center'>Upcoming Eat & Drink Events</h1>

        <div className='relative m-10 flex mx-auto justify-center items-center'>

                <button onClick={Prev} className='px-5 text-2xl'><i class="fa-solid fa-angle-left" ></i></button>


                <div className='flex flex-col sm:flex-row mx-auto justify-center items-center'>
                    
                        <img className='md:w-100  h-fit rounded-2xl transition-transform duration-300 ease-in-out 
                        hover:scale-105' src={Slider.img} alt="" />
                    
                    <div className='px-5 '>
                        <h1 className='font-bold text-xl md:text-2xl md:w-[70%] m-5'>{Slider.Heding}</h1>
                    <p className='text-sm'>{Slider.text}</p>

                        <div className='grid grid-cols-2 justify-center place-items-center gap-4 m-5'>
                            {DateAndTime.map((item, i)=>(
                                <div key={i} className='sm:flex justify-center items-center gap-4 place-items-center'>
                                    <img className='mb-2' src={item.img} alt="" />
                                    <h4 className='font-semibold'>{item.text}</h4>
                                </div>
                            ))}
                        </div>
                        

                        <div className='flex gap-5 justify-center items-center mt-5'>
                            <Button color='none' className="border border-[#0E8BFF] transition-transform duration-300 ease-in-out 
                            hover:scale-105">Add to cart</Button>
                            <Button color='primary' className='transition-transform duration-300 ease-in-out 
                            hover:scale-105'>Book Now</Button>
                        </div> 


                            <div className='flex mt-10 justify-start items-center gap-5'>
                                <p>Connect with us on:</p>
                                <div className='flex gap-2'>
                                    <img src={TW} alt="" />
                                <img src={IN} alt="" />
                                </div>
                            </div>

                    </div>

                </div>



                <button onClick={Next} className='px-5 text-2xl'><i class="fa-solid fa-angle-right"></i></button>
        </div>
    </section>
    </>
    )
}

export default ClubSlide ;