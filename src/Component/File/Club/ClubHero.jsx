


import React from 'react'
import { Button } from '@heroui/button'

function Hero() {
    return (
    <>
 <section className="bg-[url('club-hero.png')] w-full h-screen overflow-hidden bg-cover bg-center ">
        <div className='w-fit md:w-[40%] ml-30 px-10 md:px-20 py-10 md:mt-30 justify-star bg-[#00000099]/60 rounded-2xl justify-start'>


            <h1 className='font-bold text-xl md:text-2xl mt-7 text-white mb-5'>Club Quilox </h1>

            <p className='text-xl text-white mb-10'>Amaarae & Tems on June 3rd </p>

            <div className='flex justify-end mt-4'>
                <Button color='primary'>Book A Section Now</Button>
            </div>
        </div> 

           


    </section>
    </>
    )
}

export default Hero