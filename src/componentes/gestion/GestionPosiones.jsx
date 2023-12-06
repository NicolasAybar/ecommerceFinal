import React from 'react';
import Formulario from './Formulario'
import {useState, useEffect}from 'react';

const GestionPosiones = () => {
    //este archivo tiene la logica de operaciones
    //estado para almacenar las pociones
    const [pociones, setPociones] = useState([]);
    //carga inicial de pociones desde localstorage, cada pocion tiene un Item
    useEffect(()=>{
        const pocionesGuardadas = JSON.parse(localStorage.getItem('pociones'));
        if(pocionesGuardadas){
            setPociones(pocionesGuardadas)
        }
    },[]);
    //almacena las pociones en localstorage cuando cambia el estado
    useEffect (()=>{
        localStorage.setItem('pociones',JSON.stringify(pociones))
    },[pociones])
    //agregamos la pocion a la lista
    const agregarPocion=(nombre)=>{
        const nuevaPocion={
            id: Date.now(),//genera un ID univoco
            nombre,
            email,
            comentario,
            completada:false, //es el estado
        };
        setPociones([...pociones, nuevaPocion])
    }
  return (
    <div>
        <h1>Contactanos</h1>
      <Formulario/>
    </div>
  )
}

export default GestionPosiones;
