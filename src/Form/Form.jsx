import React, { useState, useEffect } from "react";

const form = ({ setCitas }) => {
    const data = ()=>{
        nombre=document.getElementById("mascota").value,
        dueno=document.getElementById("dueno").value, 
        fechaN=document.getElementById("fecha").value, 
        hora=document.getElementById("hora").value,
        sintomas=document.getElementById("sintomas").value
        }
    }
    return (
        <form>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" id="mascota" />
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" id="dueno" />
            <label>Fecha</label>
            <input type="date" name="fecha" class="u-full-width"  id="fecha"/>
            <label>Hora</label>
            <input type="time" name="hora" class="u-full-width"  id="hora"/>
            <label>Sintomas</label>
            <textarea name="sintomas" class="u-full-width" id="sintomas"></textarea>
            <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </form>
    )


export default form