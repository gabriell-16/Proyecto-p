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
            !Un restauranteparra disfrutar con toda la familia¡
          </p>
        </section>

        {/* Ramiro */}
       <CarruselMenu/>

        {/*Formulario*/}
        <ReservForm />

        {/*Juan Pablo*/}
        <Drive />
      </main>
    </>
  );
};

export default Main;