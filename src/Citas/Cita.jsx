const Citas = (props) => {
    console.log(props)
    return props.citas.map(cita => (
        <div>
            <div class="cita">
              <p>Mascota: <span>{cita.nombre}</span></p>
              <p>Dueño: <span>{cita.dueno}</span></p>
              <p>Fecha: <span>{cita.fechaN}</span></p>
              <p>Hora: <span>{cita.hora}</span></p>
              <p>Sintomas: <span>{cita.sintomas}</span>
              </p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
        </div>
    ))

}

export default Citas