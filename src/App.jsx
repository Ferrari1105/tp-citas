import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cita from './../src/Cita.jsx' 
import Form from './../src/Form.jsx' 

function App() {

  return (
    <>
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <Form></Form>
          </div>
          <div class="one-half column">
            <Cita nombre="Pipi" dueno="Axel" fechaN="2022" hora="10pm" sintomas="lele pancha"></Cita>
            <Cita nombre="Florcita" dueno="Axel" fechaN="2022" hora="10pm" sintomas="lele pancha"></Cita>
            <Cita nombre="Rocco" dueno="Axel" fechaN="2022" hora="10pm" sintomas="lele pancha"></Cita>
            <Cita nombre="Aniquilador" dueno="Axel" fechaN="2022" hora="10pm" sintomas="lele pancha"></Cita>
            
            </div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
