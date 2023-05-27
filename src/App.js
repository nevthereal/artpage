import React from "react";
import { Route, Routes } from 'react-router-dom'
import Gallery from "./components/Gallery";

import Home from "./components/Home";

function App() {
  return (
    <div className="scroll-smooth font-[Montserrat]">
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
