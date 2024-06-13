import '../css/footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="section">
          <h2>¿DONDE ESTAMOS?</h2>
          <p>Barrio Oeste II</p><br></br>
          <p>Tucumán-San Miguel de Tucumán</p>
        </div>
        <div className="section">
          <h2>CONTACTO</h2>
          <p>
            <i className="fas fa-phone-alt"></i> Reservas: a nuestro número +54 9 (381) 123-4567<br />
            <i className="fas fa-envelope"></i> E-mail: tuvaquita@gmail.com
          </p>
        </div>
        <div className="section">
          <h2>SOCIAL</h2>
          <div className="social-icons">
            <a target='_blank' href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i><br /> </a>
            <a target='_blank' href="https://www.instagram.com/"><i className="fab fa-instagram"></i><br /> </a>
            <a target='_blank' href="https://X.com/"><i className="fa-brands fa-x-twitter"></i><br /> </a>
          </div>
          <br />
          <h5>VacasFood</h5>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          <span>
          &copy; Derechos reservados por VacasFood
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;