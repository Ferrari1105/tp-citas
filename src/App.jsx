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

  return (
    <>
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <Form setCitas={setCitas}></Form>
          </div>
          <div class="one-half column">
          <h2>Administra tus citas</h2>
          <Citas citas={citas}/>
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
