
import React from 'react'
import { Button } from '@heroui/button'

function Hero() {
    return (
    <>
 <section className="bg-[url('/eat-and-drink-hero-bg.png')] w-full h-screen overflow-hidden bg-cover bg-center ">
        <div className='w-fit md:w-[40%] ml-30 px-10 md:px-20 py-10 md:mt-30 justify-star bg-[#FBFCFF]/60 rounded-2xl justify-start'>

            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight'>Our top pick for the week!</h1>

            <h4 className='font-bold text-xl md:text-2xl mt-7'>Nok by Alara</h4>

            <p className='text-medium'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor .</p>

            <div className='flex justify-end mt-4'>
                <Button color='primary'>Reserve Now</Button>
            </div>
        </div> 

           


    </section>
    </>
    )
}

export default Hero
