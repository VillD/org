import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
import { v4 as uuid } from 'uuid'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/MiOrg/MiOrg'
import Equipo from './components/Equipo/Equipo'
import Footer from './components/Footer/Footer'

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      equipo: 'Front End',
      foto: 'https://pm1.narvii.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_hq.jpg',
      nombre: 'Daniel',
      puesto: 'Alumno',
      fav: true,
    },
    {
      id: uuid(),
      equipo: 'Front End',
      foto: 'https://images.pexels.com/photos/53000/girl-beautiful-young-face-53000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      nombre: 'Glayci',
      puesto: 'Alumno',
      fav: true,
    },

    {
      id: uuid(),
      equipo: 'Programación',
      foto: 'https://images.pexels.com/photos/59497/pexels-photo-59497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      nombre: 'Luciana',
      puesto: 'Alumno',
      fav: true,
    },
    {
      id: uuid(),
      equipo: 'Móvil',
      foto: 'https://media.istockphoto.com/id/1399788030/es/foto/retrato-de-una-joven-india-confiada-que-posa-sobre-el-fondo.jpg?s=2048x2048&w=is&k=20&c=zytFdD2g0aP6AApxCmSW4PDWRxNMKDGem4sW7UVQQhI=',
      nombre: 'Pierina',
      puesto: 'Alumno',
      fav: true,
    },
    {
      id: uuid(),
      equipo: 'Innovación y Gestión',
      foto: 'https://images.pexels.com/photos/18054308/pexels-photo-18054308/free-photo-of-sitting-man-in-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      nombre: 'Daniel',
      puesto: 'Alumno',
      fav: true,
    },
  ])

  //Lista de equipo

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9',
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF',
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario: '##A6D157',
      colorSecundario: '#F0F8E2',
    },
    {
      id: uuid(),
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8',
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5',
    },
    {
      id: uuid(),
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9',
    },
    {
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29 ',
      colorSecundario: '#FFEEDF',
    },
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    )
    setColaboradores(nuevosColaboradores)
  }

  //Actualizar color
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  const registrarColaborador = (colaborador) => {
    console.log('nuevo registro', colaborador)

    //Spread operator:
    //Recibimos el nombre de la funcion a actualizar
    //tenemos dos parametros, el primero es la variable a realizar una copia
    //tenemos dos parametros, el segundo es la variable que queremos que se adentre dinamicamente
    setColaboradores([...colaboradores, colaborador])
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    //Se esta realizando una copia del valor que tiene actualmente equipos, luego se esta agregando un nuevo objeto, este nuevo objeto va a tomar los datos del nuevo equipo y asu vez se esta agregando tambien el id:uuid()
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  //like en colaborador
  const like = (id) => {
    console.log('like', id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="App">
      <Header />
      {mostrarFormulario === true ? (
        <Formulario
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          equipos={equipos.map((equipo) => {
            return equipo.titulo
          })}
        />
      ) : (
        <div></div>
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => {
        return (
          <Equipo
            datos={equipo}
            key={equipo.titulo}
            titulo={equipo.titulo}
            colorFondo={equipo.colorSecundario}
            colorPrincipal={equipo.colorPrimario}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
            like={like}
          />
        )
      })}
      <Footer />
    </div>
  )
}

export default App
