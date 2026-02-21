import React from "react";
import { Input } from "@heroui/react";
import {Autocomplete, AutocompleteItem} from "@heroui/react"
import {Textarea ,Button} from "@heroui/react";

function Contact() {
  return (
    <>
      <section className="container mx-auto">
        <div className="w-full mx-auto justify-center">
          {/* parent div */}
          <div className="flex flex-col md:flex-row gap-20 mt-20 mb-20">
            {/* left side */}
            <div className="w-full md:w-[50%] flex flex-col gap-5 justify-center">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                nunc, quisque ultricies netus elit massa aliquam quis cras. Enim
                leo, in massa sapien facilisi netu.
              </p>

              <div className="flex font-bold gap-3 ">
                <img className="w-7 h-7" src="./call.png" alt="" />
                <span>01609222711</span>
              </div>

              <div className="flex font-bold gap-3 ">
                <img className="w-7 h-5" src="./email.png" alt="" />
                <span>Nazmulhasan9641@gmail.com</span>
              </div>
            </div>

            {/* right side */}
            <div className="w-full md:w-[50%] shadow-xl p-5 rounded-2xl">
              <form action="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <Input label="Fast Name" type="text" className="h-12"/>
                    <Input label="Last Name" type="text" className="h-12"/>
                    <Input label="Email" type="Email" className="h-12"/>
                    <Input label="Phone" type="tel" className="h-12"/>

                </div>

                <Autocomplete
                        className="w-full mt-10"
                        defaultItems=""
                        label="Subject"
                        placeholder="Select Option"
                        >
                        <AutocompleteItem>Do You Think about </AutocompleteItem>
                        <AutocompleteItem>Do You Like Jurney </AutocompleteItem>
                        <AutocompleteItem>Your Favert Color </AutocompleteItem>

                        </Autocomplete>

                         <Textarea className="w-full mt-5" label="Description" placeholder="Enter your description" />

                         <Button className="mt-5 w-full" color="primary" >SEND MESSAGE</Button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
