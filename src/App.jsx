
import { HeroUIProvider } from "@heroui/system";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from './File/HomePages/HomePages';
import MyNavbar from "./File/MyNavbar"
import Footer from "./File/Footer"
import EatDrink from "./File/EatAndDrink/EatDrink";
import CartHome from "./File/Cart/CartHome";
import ContactHome from "./File/ContactSection/ContactHome";
import ClubHome from "./File/Club/ClubHome";




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
