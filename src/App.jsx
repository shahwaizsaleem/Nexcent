import React from "react"
// import '@fontsource/inter/variable.css'; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurClients from "./components/OurClients";
import Communitymanagement from "./components/Communitymanagment"
import Body from "./components/body";
import Calender from "./components/Calender";
import Tesla from "./components/Tesla"
import Reviews from "./components/Reviews";
import Footer from "./components/footer";

// import '@fontsource/inter/variable.css'; // or specific weights like 400.css

function App() {
  return (
    <main>
    <Navbar/>
    <Hero/>
    <OurClients/>
    <Communitymanagement/>
    <Body/>
    <Calender/>
    <Tesla/>
    <Reviews/>
    <Footer/>
    </main>
  )
}

export default App
