import React from "react";
import Homepage from "./pages/homePage";
import { Routes , Route } from "react-router-dom";
import StudentInfo from "./pages/StudentInfo";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/studentInfo" element={<StudentInfo/>} />
          <Route path="/about" element={<AboutPage/>} />
          
          
          
        </Routes>
      
    </>
  );
}

export default App;
