import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

import { Input } from "@heroui/react";
import { NavLink } from "react-router-dom";

function Morden() {

    const [IsOpen, SetIsOpen] = useState(false)

    const handelChange = ()=>SetIsOpen(true)
    const Close = ()=> SetIsOpen(false)


  return <>
  <div className="flex flex-wrap gap-3">
    

      <Button variant="flat" onPress={handelChange}> <i className="fa-regular fa-face-grin"></i>Account</Button>

  </div>

  <Modal isOpen={IsOpen} backdrop="blur" onClose={Close} size="5xl" placement="top" >
    <ModalContent>
        <ModalBody className="px-0 py-0 " >
                {/* parent div */}
              <div className="flex flex-col md:flex-row w-full h-full md:h-fit overflow-y-auto md:overflow-visible">
               {/* left side */}
                <div className="bg-[url('/LoginImg.png')] bg-cover bg-center flex flex-col bg-no-repeat w-full md:w-1/3 p-8 text-white " >

                <h1 className="text-center text-2xl m-5 font-bold ">Sign Up</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore nihil quasi corporis qui tempora enim sint non ducimus. Vel? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, laboriosam!</p>

                </div> 

                {/* right side */}
                  <div className="w-full md:w-2/3 p-8 bg-white">
                <div>
                  <img className="w-fit mx-auto" src="/footerLogo.svg" alt="" />
                  <h2 className="text-2xl font-bold text-[#26395C] mt-5 mb-2">
                    Sign up and get exploring!
                  </h2>
                  <p className="text-md mb-4">
                    Already have an account?{" "}
                    <a href="" className="text-blue-500">
                      Sign In
                    </a>
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md hover:bg-gray-100">
                    <img className="w-5 h-5 mr-3" src="/g.png" alt="" />
                    Sign up with Google
                  </button>
                  <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md hover:bg-gray-100">
                    <img className="w-5 h-5 mr-3" src="/f.png" alt="" />
                    Sign up with Facebook
                  </button>
                  <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md hover:bg-gray-100">
                    <img className="w-5 h-5 mr-3" src="/i.png" alt="" />
                    Sign up with Apple
                  </button>
                </div>
                {/* Divider */}
                <div className="flex items-center my-6 text-center text-gray-500">
                  <div className="flex grow border-t border-gray-300"></div>
                  <span className="px-3 text-gray-600">or continue with</span>
                  <div className="flex grow border-t border-gray-300"></div>
                </div>


                  {/* Manual Signup Form */}
                <form action="" className="mt-10">
                  <div className=" mb-4 ">
                    <Input
                      type="email"
                      label="Email"
                      placeholder="Loga Achi.com"
                      labelPlacement="outside"
                    />
                  </div>

                  <div className="mb-4 mt-12">
                    < Input
                      type="password"
                      label="Password"
                      placeholder="****************"
                      labelPlacement="outside"
                    />
                  </div>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-xl">
                    Sign Up
                  </button>

                  <p className="text-sm mt-2 text-center">
                    By creating an account, you agree to our{" "}
                    <a href="" className="text-blue-500">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="" className="text-blue-500">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>

              </div>

            </div>

        </ModalBody>
    </ModalContent>
  </Modal>
  </>;
}

export default Morden;
