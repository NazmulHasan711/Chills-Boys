import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

import { NavLink } from "react-router-dom";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

import Dropdowns from "./ButtonClickPopUp/Dropdown";
import Morden from "./ButtonClickPopUp/Morden";

function MyNavbar() {
  const [IsMenuOpen, SetIsMenuOpen] = useState(false);

  const [Islogin , SetLogin] = useState(false)

  const MenuItem2 = ["Eat & Drink", "Club", "Things to do", "Account"];

  const MenuItem = [
    <NavLink to="/" className="font-bold">Chills-Boy</NavLink>,
    <NavLink to="/drink" className="font-bold">Eat & Drink</NavLink>,
    <NavLink to="/Club" className="font-bold">Club</NavLink>,
    <NavLink to="/contact" className="font-bold">Contact</NavLink>,
    <NavLink  className="font-bold">Account</NavLink>,
    
  ];

  return (
    <>
      <Navbar
        isMenuOpen={IsMenuOpen}
        onMenuOpenChange={SetIsMenuOpen}
        className="w-full"
      >
        <NavbarContent className="sm:hidden " justify="start">
          <NavbarMenuToggle
            aria-label={IsMenuOpen ? "Close Menu" : "Open Menu"}
          ></NavbarMenuToggle>
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3 ">
          <NavbarBrand>
            <img className="w-30" src="logo.svg" alt="" />
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop device */}

        <NavbarContent className=" hidden sm:flex gap-8 w-full justify-between ">
          <NavbarBrand>
            <NavLink to="/"><img className="w-30" src="logo.svg" alt="" /></NavLink>
          </NavbarBrand>

          <NavbarItem>
            <NavLink to="/drink" className="font-bold">Eat & Drink</NavLink>
          </NavbarItem>

          <NavbarItem>
            <NavLink to="/Club" className="font-bold">
              Club <sup className=" bg-primary text-white px-2 py-1 rounded-2xl">Hot</sup>
            </NavLink>
          </NavbarItem>

          <NavbarItem>
            
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="None" className="font-bold">Things to do <i class="fa-solid fa-angle-down"></i> </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new"> <NavLink>Water Sports</NavLink> </DropdownItem>
                  <DropdownItem key="copy"> <NavLink>Outdoors</NavLink> </DropdownItem>
                  <DropdownItem key="edit"> <NavLink>Day Parties</NavLink> </DropdownItem>
                  <DropdownItem key="delete"> <NavLink>Rentals</NavLink> </DropdownItem>
                </DropdownMenu>
              </Dropdown>
          </NavbarItem>

          <NavLink to="cart">
            <NavbarItem><img src="cut.svg" alt="cut" /></NavbarItem>
          </NavLink>


          <NavbarItem>
            {Islogin===false? <Morden/> : <Dropdowns/>}
          </NavbarItem>

          <NavLink to="contact">
            <NavbarItem>
            <button className="font-bold bg-blue-500 px-4 py-2 rounded-2xl text-white">Contact Now</button>
          </NavbarItem>
          </NavLink>

        </NavbarContent>

        {/* mobile device */}

        <div>
          <NavbarContent className="w-full " justify="end ">
          <NavbarItem className="hidden lg:flex"></NavbarItem>

          <NavLink to="cart">
            <NavbarItem className="flex lg:hidden"><img src="/cut.svg" alt="" /></NavbarItem>
          </NavLink>

          <NavbarMenu>
            {MenuItem.map((item , i)=>(
              <NavbarMenuItem key={i} className="w-full mx-auto justify-center font-bold gap-5">
                <NavLink >{item}</NavLink>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>

        </NavbarContent>
        </div>
      </Navbar>
    </>
  );
}

export default MyNavbar;
