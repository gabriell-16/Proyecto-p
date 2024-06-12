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
            <i className="fas fa-phone-alt"></i> Reservas: a nuestro número a542542<br />
            <i className="fas fa-envelope"></i> E-mail: tuvaquita@gmail.com
          </p>
        </div>
        <div className="section">
          <h2>SOCIAL</h2>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f">123123123123</i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      <p>Derechos reservados por VacasFood </p>
      </div>
    </footer>
  );
}

export default Footer;