import { useState, useEffect } from "react";
const API = `http://localhost:3000/api/obtener/datos/`;

const ReservForm = () =>
    {
        const [resForm, setResForm]= useState (true);
        const [resDatos, setResDatos]=useState({
            fecha:'', mesas:'', hora:'',nombre:'',apellido:'',email:'',tel:'',
        })
        
        const [fechaMin,setFechaMin] = useState("");

        const limpiarInp = () =>{
            setResDatos({
                fecha:'', mesas:'', hora:'',nombre:'',apellido:'',email:'',tel:'',
            })

        }

        const ConfReserv = async (e) =>
            {
                e.preventDefault();
                setResForm(false);

                try{ 
                const datform = await fetch(
                    `http://localhost:3000/api/confirmar/reservacion/`,
                    {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'},
                    body: JSON.stringify(resDatos)    
                });
                const envio = await datform.json();
                console.log('Exito:',envio);
                }catch(error){
                console.error('Error:',error);
            }
            }

        const EnvDatos = async (e) =>
            {
                e.preventDefault();
                
                try{
                     const datform = await fetch(
                       `http://localhost:3000/api/confirmar/reservacion`,
                      {
                     method: 'POST',
                     headers:{
                        'Content-Type' : 'application/json'},
                     body: JSON.stringify(resDatos)});

                     const envio = await datform.json();
                     console.log('Exito:',envio);
                    } 
                    catch(error){
                     console.error('Error:',error);
                    }
            }
        
        const handleChange = (e) =>{
            if(!e.target){
                console.log("hola pajin, no valido");
                return;
            }
            const {name, value} = e.target;
            setResDatos((prev) => ({...prev, [name]: value}));
            }

            const fechas =()=>
                {
                    const date = new Date();
                    const año = date.getFullYear();
                    const mes = String(date.getMonth() + 1).padStart(2,"0");
                    const dia = String(date.getDate()).padStart(2,"0");
                    const fechaMin = `${año}-${mes}-${dia}`;
                    setFechaMin(fechaMin);
                }

                useEffect(()=>{
                    fechas();
                    },[]);


        return(
            <div className="formContainer">
                <h2 className="tituloFormulario">Reservar</h2>
                {resForm ? (
                    <form id="res-Form " onSubmit={ConfReserv}>
                        <label htmlFor="fecha">Fecha:</label>
                        <input type="date" id="fecha" name="fecha" 
                        value={resDatos.fecha} onChange={handleChange} min={fechaMin} required/>

                        <label htmlFor="personas">Mesas:</label>
                        <input type="number" id="mesas" name="mesas" 
                        value={resDatos.mesas} onChange={handleChange} placeholder="Cantidad de Mesas" required/>

                        <label htmlFor="hora">Hora:</label>
                        <select id="hora" name="hora" 
                        value={resDatos.hora} onChange={handleChange} placeholder="Horario" required>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                            <option value="23:00">23:00</option>                           
                        </select>
                        <button type="submit" >Reservar</button>
                    </form>
                
                ):( 
                    <form id="DatosForm" onSubmit={EnvDatos}>
                        <h2>Detalles de la Reservacion</h2>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" 
                        value={resDatos.nombre} onChange={handleChange} placeholder="Nombre" required/>

                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" 
                        value={resDatos.apellido} onChange={handleChange} placeholder="Apellido" required/>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email"
                        value={resDatos.email} onChange={handleChange} placeholder="Email" required/>

                        <label htmlFor="tel">Telefono:</label>
                        <input type="number" id="tel" name="tel"
                        value={resDatos.tel} onChange={handleChange} placeholder="Telefono" required/>

                        <button type="submit" onClick={limpiarInp}>Reservar</button>
                    </form>
                )}
            </div>
        )
    }
export default ReservForm;