

import React from 'react'
import Contact from './Contact'
import Card from "./card"
import Accordions from './Accordions'

function ContactHome() {
    return (
    <>
    <div className='overflow-hidden'>
        <Contact/>
        <Card/>
        <Accordions/>
    </div>
    </>
    )
}

export default ContactHome