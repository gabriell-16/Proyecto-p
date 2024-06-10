import React from 'react'

const Main = () => {
  return (
    <>
    <main className="main-content">
      <section className="section">
        <h1>Welcome to Our Website</h1>
        <p>This is the main content area. Here you can add the main content of your application.</p>
      </section>
      
              {/*Ramiro */}
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
      

      {/*Formulario*/}
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
      

           {/*Jun Pablo*/}
      <div className="images-container">
        <h2>Gallery</h2>
        <button>Show More Images</button>
        <div className="images">
          <img src="/path/to/image4.jpg" alt="Image 4" />
          <img src="/path/to/image5.jpg" alt="Image 5" />
          <img src="/path/to/image6.jpg" alt="Image 6" />
        </div>
      </div>
    </main>
    </>
  )
}

export default Main