import React from "react";

function HomepageMidContent() {
  return (
    <>
      <div className="hero bg-green-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1512253022256-19f4cb92a4dc?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-96 rounded-lg shadow-2xl"
          />
          <div className="w-2/3 mx-32">
            <h1 className="text-5xl text-red-500 font-bold">Welcome to SDKL Public School !</h1>
            <p className="pr-28 text-lg text-black py-6">
            SDKL Public School is a new educational institution dedicated to fostering academic excellence and personal growth. Our modern facilities and experienced faculty create a supportive environment where students can thrive. We focus on innovative teaching methods that inspire creativity and critical thinking, preparing our students to become responsible global citizens. Join us in shaping a brighter future!
            </p>
            <button onClick={() => window.location.href = './about'}  className="btn btn-outline btn-success">About </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomepageMidContent;
