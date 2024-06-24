import React from "react";
import ReservForm from "./components-in/Formulario";
import Drive from "./components-in/Elpelotudodjp";
import CarruselMenu from "./components-in/CarruselMenu";
import "../css/Carrusel.css";

const Main = () => {
  return (
    <>
      <main className="main-content">
        <section className="section" id="Home">
          <h1 id="texto">Vaca's Food</h1>
          <p id="texto">
            Un restaurante para disfrutar con toda la familia
          </p>
        </section>
        <div className="main-carrusel">
          {/* Ramiro */}
          <CarruselMenu />
        </div>

        <div className="main-reservacion" id="Reservacion">
          {/*Formulario*/}
          <ReservForm />
        </div>

        <div className="main-drive" id="Menú">
          <Drive />
        </div>
      </main>
    </>
  );
};

export default Main;