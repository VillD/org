import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'
import { useState } from 'react'

const Formulario = (props) => {
  const [nombre, setNombre] = useState('')
  const [puesto, setPuesto] = useState('')
  const [foto, setFoto] = useState('')
  const [equipo, setEquipo] = useState('')

  const [titulo, setTitulo] = useState('')
  const [color, setColor] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault()
    let datosEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    }
    props.registrarColaborador(datosEnviar)
  }

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    props.crearEquipo({ titulo, colorPrimario: color })
  }
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <CampoTexto
          type="text"
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <CampoTexto
          type="text"
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <CampoTexto
          type="text"
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={setFoto}
        />
        <ListaOpciones
          valor={equipo}
          setEquipo={setEquipo}
          equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>

      <form action="" onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <CampoTexto
          titulo="Titulo"
          type="text"
          required
          valor={titulo}
          placeholder="Ingresa titulo"
          actualizarValor={setTitulo}
        />
        <CampoTexto
          titulo="Color"
          type="color"
          required
          valor={color}
          placeholder="Ingresar el color en Hex"
          actualizarValor={setColor}
        />
        <Boton>Registrar equipo</Boton>
      </form>
    </section>
  )
}

export default Formulario
