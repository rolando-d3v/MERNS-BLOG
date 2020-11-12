import React from "react";

function Card3({ev}) {
  return (
    <div className="w-95 shadow-xl rounded-b-xl m-3 ">
      <div
        className="h-68 bg-cover rounded-t-xl"
        style={{
          backgroundImage: `url(${ev.image})`,
        }}
      > 
      </div>
      {/* CONTENEDOR TEXT */}
      <div className=" p-4 ">
        <div className="mb-8">
          <div className="text-black font-bold text-xl mb-2">
            {ev.nombre}
          </div>
          <p className="text-grey-darker text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
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
              <p>precio:  {ev.precio} $ </p>
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

export default Card3;
