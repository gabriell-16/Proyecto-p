
import React, { useState } from 'react';


import React from 'react'
import ReservForm from './components-in/Formulario'

const Main = () => {
  //Array con las imagenes
  const images = [
    { src: 'imagenes/hb.jpg', alt: 'Imagen 1', info: 'Deliciosa hamburguesa con carne 100% argentina, acompañada de queso, lechuga, tomate, y una salsa especial que resalta los sabores tradicionales. ' },
    { src: 'imagenes/muzza.jpg', alt: 'Imagen 2', info: 'Palitos de queso mozzarella empanizados y fritos, perfectos para disfrutar como aperitivo. Servidos con una salsa marinara para un toque extra de sabor.' },
    { src: 'imagenes/panchi.jpg', alt: 'Imagen 3', info: 'Un clásico hot dog con salchicha de alta calidad, servido en un pan suave y esponjoso, con aderezos como mostaza, ketchup, cebolla y queso.' },
    { src: 'imagenes/cv.jpg', alt: 'Imagen 4', info: 'Una selección de cervezas artesanales, elaboradas con ingredientes de alta calidad y métodos tradicionales, ofreciendo una variedad de sabores únicos y refrescantes.' },
    { src: 'imagenes/paps.jpg', alt: 'Imagen 5', info: 'Crujientes papas fritas doradas a la perfección, ideales para acompañar cualquier comida. Servidas con una variedad de salsas para dippear.' },
    { src: 'imagenes/polloo.jpg', alt: 'Imagen 6', info: 'Jugosas piezas de pollo empanizadas y fritas hasta quedar crujientes, con un sazonado especial que le da un sabor irresistible.' },
  ];
// El fucking Hook
  const [flipped, setFlipped] = useState(Array(images.length).fill(false));
//Funcion para girar las imagenes
  const handleFlip = index => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };
//Funcion que redirige a una url papu
  const handleButtonClick = () => {
    window.location.href = 'https://pdf';
  };

  return (
    <>
      <main className="main-content">
        <section className="section">

          <h1>Welcome to Our Website</h1>
          <p>This is the main content area. Here you can add the main content of your application.</p>
        </section>
        
        {/* Ramiro */}
        <div className="carousel-container">
          {/* Aquí puedes insertar el código de tu carrusel */}
          <h2>Image Carousel</h2>
          <div className="carousel">
            {/* Ejemplo de carrusel, puedes reemplazarlo con un componente de carrusel real */}
            <img src="/path/to/image1.jpg" alt="Image 1" />
            <img src="/path/to/image2.jpg" alt="Image 2" />
            <img src="/path/to/image3.jpg" alt="Image 3" />
          </div>
        </div>
        
        {/* Formulario */}
        <div className="form-container">
          <h2>Reservar una Mesa</h2>
          <form id="reservation-form">
            <label htmlFor="date">Fecha:</label>
            <input type="date" id="date" name="date" required />
  
            <label htmlFor="people">Personas:</label>
            <input type="number" id="people" name="people" required />
  
            <label htmlFor="time">Hora:</label>
            <select id="time" name="time" required>
              <option value="">Seleccione</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
              <option value="21:30">21:30</option>
              <option value="22:00">22:00</option>
            </select>
            <button type="submit">Reservar</button>
          </form>
  
          <form id="details-form" style={{ display: 'none' }}>
            <h2>Detalles de la Reserva</h2>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
  
            <label htmlFor="surname">Apellidos:</label>
            <input type="text" id="surname" name="surname" required />
  
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
  
            <label htmlFor="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" required />
  
            <button type="submit">Reservar</button>
          </form>
        </div>
        
        {/* Juan Pablo */}
        <div className="images-container">
          <h2>Gallery</h2>
          <div className="images" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleFlip(index)}
                style={{
                  perspective: '1000px',
                  width: '150px',
                  height: '150px',
                  margin: '10px',
                  cursor: 'pointer',
                  position: 'relative',
                  flexBasis: '30%',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.6s',
                  transformStyle: 'preserve-3d',
                  transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0)',
                }}>
                  <div style={{
                    backfaceVisibility: 'hidden',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                  }}>
                    <img src={image.src} alt={image.alt} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    backfaceVisibility: 'hidden',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    backgroundColor: '#f0f0f0',
                    transform: 'rotateY(180deg)',
                    padding: '10px',
                  }}>
                    <p>{image.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleButtonClick}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: 'yellow',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Menú completo
          </button>
        </div>
          <h1>VacasFood</h1>
          <p>Un restaurante para compartir con toda la Familia</p>
        </section>

        {/*Ramiro */}
        {/* <div className="carousel-container">
        <h2>Image Carousel</h2>
        <div className="carousel">
          <img src="/path/to/image1.jpg" alt="Image 1" />
          <img src="/path/to/image2.jpg" alt="Image 2" />
          <img src="/path/to/image3.jpg" alt="Image 3" />
        </div>
      </div> */}

        {/*Formulario*/}
        <ReservForm />


        {/*Juan Pablo*/}
        {/* <div className="images-container">
        <h2>Gallery</h2>
        <button>Show More Images</button>
        <div className="images">
          <img src="/path/to/image4.jpg" alt="Image 4" />
          <img src="/path/to/image5.jpg" alt="Image 5" />
          <img src="/path/to/image6.jpg" alt="Image 6" />
        </div>
      </div> */}

      </main>
    </>
  );
};

export default Main;