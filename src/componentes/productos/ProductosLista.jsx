import React from 'react'
import PropTypes from 'prop-types';
import imagenes from './imagenes';

function ProductosLista (props){
  return (
    <section className='seccion'>
        <h2>{props.id}</h2>
        <p>{props.nombre}</p>
        <p>{props.rating}</p>
        <p>{props.precio}</p>
        <p>{props.descripcion}</p>
        <p>{props.descripcionExpandida}</p>
        <img src={imagenes[props.imagen]} alt={props.nombre}/>
    </section>
  )
}
ProductosLista.prototype={
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    descripcion: PropTypes.string.isRequired,
    descripcionExpandida: PropTypes.string,
    imagenes: PropTypes.string,
};
export default ProductosLista;
