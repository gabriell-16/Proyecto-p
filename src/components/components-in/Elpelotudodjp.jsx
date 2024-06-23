import { useState } from "react";

const Drive = () => {
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
        window.location.href = "http://localhost:3000/api/menuPDF";
    };

    return(
        <>  
        <div className="images-container">
          <h2>Gallery</h2>
          <div className="images" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleFlip(index)}
                style={{
                  perspective: '1000px',
                  width: '140px',
                  height: '220px',
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
                color: 'black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
            }}
          >
            Menú completo
          </button>
        </div>
        <section> 
          <h1>Vaca's Food</h1>
          <p>Un restaurante para compartir con toda la Familia</p>
        </section>
    </>
    )
    

}  
export default Drive;