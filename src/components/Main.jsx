import React from 'react'
import ReservForm from './components-in/Formulario'
const Main = () => {
  return (
    <>
      <main className="main-content">
        <section className="section">
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
  )
}

export default Main