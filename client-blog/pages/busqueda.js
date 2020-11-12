import React from "react";
import Card3 from "../components/carousel/Card3";
import Card4 from "../components/carousel/Card4";
import Carousel from "../components/carousel/Carousel";

function busqueda() {
  const arreglo = [
    { nombre: "Habitacion sencilla de nueva york", precio: "1200", image: '/jp/hospedaje1.jpg' },
    { nombre: "Habitacion sencilla de peru", precio: "3000",image: '/jp/hospedaje2.jpg'  },
    { nombre: "Habitacion sencilla de brasil", precio: "6000",image: '/jp/hospedaje3.jpg'  },
    { nombre: "Habitacion sencilla de rusia", precio: "5000",image: '/jp/hospedaje4.jpg'  },
  ];


  const actividades = [
    { nombre: "Habitacion", precio: "1200", image: '/jp/actividad1.jpg' },
    { nombre: "sencilla de peru", precio: "3000",image: '/jp/actividad2.jpg'  },
    { nombre: "sencilla de brasil", precio: "6000",image: '/jp/actividad3.jpg'  },
    { nombre: "Habitacion de rusia", precio: "5000",image: '/jp/actividad4.jpg'  },
  ];

  return (
    <div className="container-x pt-16 md:px-8 xl:px-16 ">
      <div className="mt-8">
        <Carousel />
        <div className="mt-8">
          <h3 className="text-3xl font-bold px-5">
            Alojamientos en Nueva York
          </h3>
          <div className="flex flex-wrap justify-evenly">
            {arreglo.map((ev, index) => (
              <Card3 key={index} ev={ev} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold px-5">
            Experiencias en Nueva York
          </h3>
          <div className="flex flex-wrap justify-evenly">
            {actividades.map((ev, index) => (
              <Card4 key={index} ev={ev} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default busqueda;
