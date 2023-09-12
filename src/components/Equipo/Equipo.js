import './Equipo.css'
import Colaborador from '../Colaborador/Colaborador'
import hexToRgba from 'hex-to-rgba'
const Equipo = (props) => {
  const { colaboradores, eliminarColaborador, actualizarColor } = props

  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: hexToRgba(props.colorPrincipal, 0.6) }}>
          <input
            className="input-color"
            type="color"
            name=""
            id=""
            value={props.colorPrincipal}
            onChange={(e) => {
              console.log('Probando id: ', props.datos.id)
              actualizarColor(e.target.value, props.datos.id)
            }}
          />
          <h3 style={{ borderColor: props.colorPrincipal }}>{props.titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => {
              return (
                <Colaborador
                  datos={colaborador}
                  key={index}
                  colorPrimario={props.colorPrincipal}
                  eliminarColaborador={eliminarColaborador}
                  like={props.like}
                />
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}

export default Equipo
