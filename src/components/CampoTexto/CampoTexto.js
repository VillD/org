import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
  const cambioValor = (e) => {
    props.actualizarValor(e.target.value)
  }

  return (
    <div className="campo-texto">
      <label for="">{props.titulo}</label>
      <input
        type={props.type}
        placeholder={`${props.placeholder}...`}
        required={props.required}
        value={props.valor}
        onChange={cambioValor}
      />
    </div>
  )
}

export default CampoTexto
