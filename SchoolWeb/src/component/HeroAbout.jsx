import React from "react";
import Image from "../assets/pexels-yankrukov-8617845.jpg";
import collegevideo from '../assets/collegeshort.mp4'

function HeroAbout() {
  return (
    <><div className="h-10 bg-slate-100">

        <h1 className=" font-bold text-2xl text-center">
            How Are You ?
        </h1>

    </div>
      <div className="bg-gray-400 flex justify-around ">
      <div className=" w-1/3 mb-2  rounded-2xl mx-5 bg-black">
        <img className="w-full     py-5 mx-14  " src={Image} alt="" />
      </div>
      <div className="w-2/4 text-yellow-300 py-20 ">
        <h1 className="text-red-500 text-3xl font-bold italic">Hello Guys !</h1>
        <p className=" italic text-xl font-bold">
        At Sdkl Public School, founded in Nighasan Kheri, the owner envisioned an institution dedicated to quality education and character building. Under their guidance, the school has fostered an environment where students can excel academically and grow personally. This commitment to holistic development ensures that each student is equipped not only with knowledge but also with values, preparing them to contribute positively to society.
        </p>
      </div>
      </div>
      
      <div className="flex justify-around border-8 border-yellow-700 p-2 m-2  bg-red-100 ">
            
            <div className="w-1/3 text-2xl py-24">
              <p className="text-black italic">
              At <span className=" font-bold text-red-500">S. D. K. L. Public School</span> , we believe that celebrating diverse cultures and traditions enriches our community and strengthens our students' understanding of the world. Our cultural programs offer students a platform to explore, express, and embrace cultural heritage through various creative and interactive activities.
              </p>
            </div>
            <div>
            <video className="rounded-box" width="300" controls>
                <source src={collegevideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        </div>
    </>
  );
}

export default HeroAbout;
