import { useState } from 'react'
import './App.css'
import Citas from './Citas/Cita'
import Form from './../src/Form/Form' 

function App() {
  const [citas, setCitas] = useState([
    {nombre:"Pipi", dueno:"Axel", fechaN:"2022", hora:"10pm", sintomas:"lele pancha"},
    {nombre:"Florcita", dueno:"Axel", fechaN:"2022", hora:"10pm", sintomas:"lele pancha"},
    {nombre:"Rocco", dueno:"Axel", fechaN:"2022", hora:"10pm", sintomas:"lele pancha"},
    {nombre:"Aniquilador", dueno:"Axel", fechaN:"2022", hora:"10pm", sintomas:"lele pancha"}
  ])
const sumarCita = (Ncita) =>{
  let newCitas = [...citas]
  newCitas.push(Ncita)
  console.log(newCitas)
  setCitas(newCitas)
}
  return (
    <>
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Form sumarCita={sumarCita}></Form>
          </div>
          <div className="one-half column">
          <h2>Administra tus citas</h2>
          {citas.map((cita, key) => (
            <Citas cita={cita} key={key}/>
          ))}
  
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
