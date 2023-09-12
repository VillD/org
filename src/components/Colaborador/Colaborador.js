import './Colaborador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Colaborador = (props) => {
  //Podemos destructurar las props--> const [nombre, puesto, foto] = props.dato
  //Así mismo con el resto
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => props.eliminarColaborador(props.datos.id)}
      />
      <div
        className="encabezado"
        style={{ backgroundColor: props.colorPrimario }}>
        <img src={props.datos.foto} alt={props.datos.nombre} />
      </div>
      <div class="info">
        <h4>{props.datos.nombre}</h4>
        <h5>{props.datos.puesto}</h5>

        {props.datos.fav ? (
          <AiFillHeart onClick={() => props.like(props.datos.id)} color="red" />
        ) : (
          <AiOutlineHeart onClick={() => props.like(props.datos.id)} />
        )}
      </div>
    </div>
  )
}

export default Colaborador
