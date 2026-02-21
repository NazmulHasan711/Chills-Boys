

import React from 'react'
import {Autocomplete, AutocompleteItem, Button} from "@heroui/react"

function DropDown() {
    return (
    <>
    <section className='mx-auto container justify-center overflow-hidden px-2 py-4'>
        <div className='w-[90%]  bg-white  rounded-2xl mt-5 px-4 py-2 mx-auto justify-center '>

            <h1 className='text-xl sm:text-2xl  md:text-3xl font-black m-5'>Find the best places to eat and drink for any occasion</h1>

                <div className='grid grid-cols-1 sm:grid-cols-6 '>
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

                    <Autocomplete label="Time" labelPlacement='outside' className='w-full px-5 font-bold mt-3'>
                        <AutocompleteItem>10:am</AutocompleteItem>
                        <AutocompleteItem>12:am</AutocompleteItem>
                        <AutocompleteItem>3:pm</AutocompleteItem>
                        <AutocompleteItem></AutocompleteItem>
                    </Autocomplete>

                    <Autocomplete label="Cuisine" labelPlacement='outside' className='w-full px-5 font-bold mt-3'>
                        <AutocompleteItem>Dhaka</AutocompleteItem>
                        <AutocompleteItem>Gazipur</AutocompleteItem>
                        <AutocompleteItem>Mirpur</AutocompleteItem>
                    </Autocomplete>

                    <Autocomplete label="People" labelPlacement='outside' className='w-full px-5 font-bold mt-3'>
                        <AutocompleteItem>Dhaka</AutocompleteItem>
                        <AutocompleteItem>Gazipur</AutocompleteItem>
                        <AutocompleteItem>Mirpur</AutocompleteItem>
                    </Autocomplete>


                        <Button color='primary' className=' items-center mt-9'>Search</Button>

                </div>

            </div>
    </section>
    </>
    )
}

export default DropDown