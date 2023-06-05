import {useState} from "react";
import './Cita.css'
const Citas = ({cita}) => {
    function confirmacion(){
        let respuesta = confirm("Estas seguro? Se borrara la cita")

        return respuesta
    }
    const [eliminado, setEliminado] = useState(false) 

    return (!eliminado && 
        <div>
            <div className="cita">
              <p>Mascota: <span>{cita.nombre}</span></p>
              <p>Dueño: <span>{cita.dueno}</span></p>
              <p>Fecha: <span>{cita.fechaN}</span></p>
              <p>Hora: <span>{cita.hora}</span></p>
              <p>Sintomas: <span>{cita.sintomas}</span></p>
              <button className="button elimnar u-full-width btnE" onClick={()=>setEliminado(confirmacion())}>Eliminar ×</button>
            </div>
        </div>
        )
    

}

export default Citas