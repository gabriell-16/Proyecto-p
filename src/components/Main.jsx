import React from "react";
import ReservForm from "./components-in/Formulario";
import Drive from "./components-in/Elpelotudodjp";
import CarruselMenu from "./components-in/CarruselMenu";
import "../css/Carrusel.css";

const Main = () => {
  return (
    <>
      <main className="main-content">
        <section className="section">
          <h1>Vaca's Food</h1>
          <p>
            Un restaurante para disfrutar con toda la familia
          </p>
        </section>
        <div className="main-carrusel">
          {/* Ramiro */}
          <CarruselMenu />
        </div>

        <div className="main-reservacion">
          {/*Formulario*/}
          <ReservForm />
        </div>

        <div className="main-drive">
          {/*Juan Pablo*/}
          <Drive />
        </div>
      </main>
    </>
  );
};

export default Main;