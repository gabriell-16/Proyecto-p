import { useState, useEffect } from "react";

const ReservForm = () => {
  const [resDatos, setResDatos] = useState({
    fecha: '', cantidad: '', hora: '', nombre: '', apellido: '', correo: '', telefono: '',
  });
  const [fechaMin, setFechaMin] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false); 

  const limpiarInp = () => {
    setResDatos({
      fecha: '', cantidad: '', hora: '', nombre: '', apellido: '', correo: '', telefono: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/api/insertar/reservacion`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(resDatos)
        }
      );
      const result = await response.json();
      console.log('Exito:', result);

      if (response.ok) {
        limpiarInp();
        alert('Reservación completada con éxito');
        setFormVisible(false);
      } else {
        console.error('Error en la respuesta:', result);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    if (!e.target) {
      console.log("Input no válido");
      return;
    }
    const { name, value } = e.target;
    setResDatos((prev) => ({ ...prev, [name]: value }));
  };

  const fechas = () => {
    const date = new Date();
    const año = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, "0");
    const dia = String(date.getDate()).padStart(2, "0");
    const fechaMin = `${año}-${mes}-${dia}`;
    setFechaMin(fechaMin);
  };

  useEffect(() => {
    fechas();
  }, []);

  return (
    <div className="formContainer">
      <button onClick={() => setFormVisible(!formVisible)}>
        {formVisible ? "Ocultar Formulario" : "Reservar"}
      </button>

      {formVisible && (
        <>
          <h2 className="tituloFormulario">Reservar</h2>
          <form id="res-Form" onSubmit={handleSubmit}>
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha"
              value={resDatos.fecha} onChange={handleChange} min={fechaMin} required />

            <label htmlFor="mesas">Mesas:</label>
            <input 
              type="number" 
              id="mesas" 
              name="cantidad"
              value={resDatos.cantidad} 
              onChange={handleChange} 
              placeholder="Cantidad de Mesas" 
              required 
              onClick={() => setShowMessage(true)} 
              onBlur={() => setShowMessage(false)} 
            />
            {showMessage && <small className="message">La mesa es para 4 personas!</small>}

            <label htmlFor="hora">Hora:</label>
            <select id="hora" name="hora"
              value={resDatos.hora} onChange={handleChange} required>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
              <option value="23:00">23:00</option>
            </select>

            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre"
              value={resDatos.nombre} onChange={handleChange} placeholder="Nombre" required />

            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido"
              value={resDatos.apellido} onChange={handleChange} placeholder="Apellido" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="correo"
              value={resDatos.correo} onChange={handleChange} placeholder="Email" required />

            <label htmlFor="tel">Teléfono:</label>
            <input type="number" id="tel" name="telefono"
              value={resDatos.telefono} onChange={handleChange} placeholder="Teléfono" required />

            <button type="submit">Reservar</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ReservForm;