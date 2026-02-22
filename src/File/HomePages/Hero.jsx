
import React from 'react'
import {Autocomplete, AutocompleteItem, Button} from "@heroui/react"

function Hero() {
    return (
    <>
    <section className="bg-[url('/hero.png')] w-full h-screen overflow-hidden bg-cover bg-center">
        <div className='md:w-[70%] px-10 md:px-20 py-10 md:mt-10 justify-start '>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>Find amazing things to do anytime, anywhere in Lagos.</h1>
        </div> 

            <div className='w-60 h-90 md:w-180 md:h-25 bg-white ml-10 rounded-2xl mt-5 px-4 py-2'>

                <div className='grid grid-cols-1 sm:grid-cols-4 '>
                    <Autocomplete label="Location" labelPlacement='outside' className='w-full px-5 font-bold mt-3'>
                        <AutocompleteItem>Dhaka</AutocompleteItem>
                        <AutocompleteItem>Gazipur</AutocompleteItem>
                        <AutocompleteItem>Mirpur</AutocompleteItem>
                    </Autocomplete>

                    <Autocomplete label="Date" labelPlacement='outside' className='w-full px-5 font-bold mt-3'>
                        <AutocompleteItem>2000</AutocompleteItem>
                        <AutocompleteItem>2005</AutocompleteItem>
                        <AutocompleteItem>2010</AutocompleteItem>
                    </Autocomplete>

                    <Autocomplete label="Activities" labelPlacement='outside' className='w-full px-5 font-bold mt-3'>
                        <AutocompleteItem>Upcoming</AutocompleteItem>
                        <AutocompleteItem>New</AutocompleteItem>
                        <AutocompleteItem>Old</AutocompleteItem>
                    </Autocomplete>


                        <Button color='primary' className=' items-center mt-9'>Search</Button>

                </div>

            </div>
    </section>
    </>
    )
}

export default Hero;
