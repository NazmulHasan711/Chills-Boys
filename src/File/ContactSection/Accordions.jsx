

import React from 'react'
import {Accordion, AccordionItem} from "@heroui/react";

function Accordions() {
    return (
    <>
    <section className='container mx-auto'>

      <div className='w-[50%] mx-auto justify-center mt-20 mb-2'>
        <h1 className='font-bold text-xl md:text-2xl text-center'>Frequently Asked Questions</h1>

        <p className='text-gray-500 mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nunc, purus est sem volutpat at at. Ultricies erat leo risus, eget venenatis tristique morbi.</p>
      </div>

        <div className='w-full mx-auto justify-center mt-10 mb-20'>
            <Accordion >

      <AccordionItem key="1"  title="How does Chillsbay work?" className='bg-[#F5FAFF] font-bold px-4 py-2 rounded-md'>

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, quasi facilis adipisci aspernatur sint fugit eaque dignissimos ab non in nostrum amet beatae ex quibusdam cumque. Veniam, accusantium. Ab at sed illo ducimus aliquam ipsa placeat nam, dolor officia ipsum consequatur voluptas quisquam unde repellat porro aut commodi sapiente quam?
      </AccordionItem>

      <AccordionItem key="2"  title="Can I pay with Crypto on Chillsbay.com? " className='bg-[#F5FAFF] font-bold px-4 py-2 rounded-md'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cupiditate quasi inventore obcaecati! Dolorum, alias fugit natus unde, accusamus officiis corporis magnam, hic adipisci a sequi ea! Consequuntur id ducimus ut, enim porro expedita deserunt quos aut recusandae voluptatibus facere sed amet! Quam officia modi fugit iste natus harum commodi.
      </AccordionItem>

      <AccordionItem key="3"  title="How can I become a Chillsbay Host?" className='bg-[#F5FAFF] font-bold px-4 py-2 rounded-md'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, impedit. Harum voluptatibus vel vero, culpa dolorem cupiditate quia iure necessitatibus dolore perspiciatis nisi eum saepe eveniet ad, nesciunt, id doloribus? Iure, explicabo. Iste eos non esse ipsa. Nostrum, beatae voluptatum vel officia, aut ex molestiae numquam, quis recusandae quod quo!
      </AccordionItem>
    </Accordion>
        </div>
    </section>
    </>
    )
}

export default Accordions