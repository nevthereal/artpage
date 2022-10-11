import React from "react";
import { Route, Routes } from 'react-router-dom'
import Gallery from "./components/Gallery";

import Home from "./components/Home";

function App() {
  return (
    <div className="scroll-smooth font-[Montserrat]">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
