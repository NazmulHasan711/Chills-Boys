
import { HeroUIProvider } from "@heroui/system";
import React from "react";
import {Route , Router , Routes,BrowserRouter  } from "react-router";
import HomePage from './Component/File/HomePages/HomePages';
import MyNavbar from "./Component/File/MyNavbar"
import Footer from "./Component/File/Footer"
import EatDrink from "./Component/File/EatAndDrink/EatDrink";
import CartHome from "./Component/File/Cart/CartHome";
import ContactHome from "./Component/File/ContactSection/ContactHome";
import ClubHome from "./Component/File/Club/ClubHome";




function App() {


  return (
    <>

    

    <HeroUIProvider>

    <BrowserRouter >
      <MyNavbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="drink" element= {<EatDrink/>}></Route>
        <Route path="cart" element= {<CartHome/>}></Route>
        <Route path="contact" element= {<ContactHome/>}></Route>
        <Route path="Club" element={<ClubHome/>}> </Route>
      </Routes>

      <Footer/>
    </BrowserRouter>

    </HeroUIProvider>
    </>
  )
}

export default App
