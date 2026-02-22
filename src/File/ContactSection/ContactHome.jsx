

import React from 'react'
import Contact from './Contact'
import Card from "./card"
import Accordions from './Accordions'

function ContactHome() {
    return (
    <>
    <div className='overflow-hidden container mx-auto px-10 md:px-20 py-10 md:mt-10 justify-center '>
        <Contact/>
        <Card/>
        <Accordions/>
    </div>
    </>
    )
}

export default ContactHome