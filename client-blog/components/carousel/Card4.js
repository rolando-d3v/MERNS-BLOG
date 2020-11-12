import React from "react";

function Card4({ ev }) {
  return (
    <div className="w-96 sm:flex shadow-lg m-3 border-4 border-blue-800 hover:border-green-500 rounded-xl ">
      <div
        className=" h-64 sm:h-auto sm:w-64  bg-cover text-center  rounded-l-lg"
        style={{
          backgroundImage: `url(${ev.image})`,
        }}
      ></div>

      <div className=" bg-white p-4 flex flex-col justify-between leading-normal rounded-r-xl">
        <div className="mb-8">
          <div className="text-black font-bold text-xl mb-2">{ev.nombre}</div>
          <p className="text-grey-darker text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus.
          </p>
        </div>
        <div className="flex justify-between text-xs">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm text-gray-500">
              <p className="leading-none">Jonathan Reinink</p>
              <p>{ev.precio} </p>
            </div>
          </div>

          <div className="px-1 ">
            <button className="btn bg-blue-400 hover:bg-red-700">
              Ver mas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
