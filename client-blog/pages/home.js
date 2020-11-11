import React from "react";
import Card2 from "../components/cards/Card2";

function home() {
  return (
    <div className="container-x md:px-8 pt-16">
      <div className=" grid grid-cols-2 grid-rows-2 lg:grid-cols-4  lg:grid-rows-4 gap-2 ">

        <div className=" col-span-1 lg:col-span-2 lg:row-span-2 bg-blue-400 ">sidebar</div>


        <div className="col-span-1 lg:col-span-1  lg:row-span-4 bg-red-400 ">
          <Card2 />
        </div>


        <div className="col-span-1 lg:col-span-1 lg:row-span-4 bg-pink-400">
          <Card2 />
          <Card2 />
          <Card2 />
        </div>

        <div className="col-span-1 lg:col-span-2 lg:row-span-2 bg-blue-400 ">sidebar</div>

       

      </div>
    </div>
  );
}

export default home;
