const cita= (props) => {
    return(
        <div>
            <div class="cita">
              <p>Mascota: <span>{props.nombre}</span></p>
              <p>Dueño: <span>{props.dueno}</span></p>
              <p>Fecha: <span>{props.fechaN}</span></p>
              <p>Hora: <span>{props.hora}</span></p>
              <p>Sintomas: <span>{props.sintomas}</span>
              </p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
        </div>
    )

}

export default cita