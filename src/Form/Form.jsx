import React, { useState, useEffect } from "react";

const form = ({ sumarCita}) => {
    const [cita, setCita] = useState({
        nombre: null,
        dueno: null,
        fechaN: null,
        hora: null,
        sintomas: null
    })
    const handleChange = e => setCita({ ...cita, [e.target.name]: e.target.value })
    const handleSubmit = () =>{
        sumarCita({...cita})
         document.getElementById("mascota").value=""
         document.getElementById("dueno").value=""
         document.getElementById("fecha").value="" 
         document.getElementById("hora").value=""
         document.getElementById("sintomas").value= ""
    }
    return (
        <form>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" id="mascota" onChange={handleChange} />
            <label>Nombre Dueño</label>
            <input type="text" name="dueno" className="u-full-width" placeholder="Nombre dueño de la mascota" id="dueno" onChange={handleChange}/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width"  id="fecha" onChange={handleChange}/>
            <label>Hora</label>
            <input type="time" name="hora" className="u-full-width"  id="hora" onChange={handleChange}/>
            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width" id="sintomas" onChange={handleChange}></textarea>
            <button type="button" className="u-full-width button-primary" onClick={handleSubmit}>Agregar Cita</button>
        </form>
    )
}
    
    
    export default form