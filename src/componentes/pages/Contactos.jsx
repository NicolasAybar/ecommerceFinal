//import { Input } from "@mui/icons-material";
//import { useState } from "react";

import { CheckBox } from '@mui/icons-material'
import React from 'react'
import { useForm } from 'react-hook-form'
import './Contactos.css'

const Contactos = () => {
    //estado del formulario por medio de watch, que al ejecutarse trae el estado actual
    const { register, handleSubmit, formState: { errors },watch, setValue, } = useForm({defaultValues:{}});
    console.log(errors)
    const onSubmit = handleSubmit((data) => {
        console.log(data);
       alert('Enviando datos...')
       reset()
    })
    return (
        <div className='ContenedorForm'>
            <form onSubmit={onSubmit} className='form1'>
                <label htmlFor="nombre">Nombre</label>
                <input type='text' {...register("nombre", { required:{value:true,message:"Nombre es requerido"}, minLength: {value:2,
                    message:"Nombre debe ytener al menos dos caracteres"}, 
                    maxLength: {value:20,message:"Nombre debe tener maximo 20 caracteres" }})} />
                
                {errors.nombre && <span>{errors.nombre.message}</span>}
                

                <label htmlFor='correo'>Correo</label>
                <input type='email' {...register("correo", { required: {value:true,message:"Correo requerido"},
                pattern:{value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    message:"Correo no valido"
            }
             })} />
                {errors.correo && <span>{errors.correo.message}</span>}


                <label htmlFor='comentario'>Comentario</label>
                <input type='comentario' {...register("comentario")} />
                <label htmlFor="cliente">Cliente</label>
                <select {...register("cliente")}>
                    <option value="CFinal">CFinal</option>
                    <option value="Max">Mayorista</option>
                </select>
                {
                    watch('cliente') === 'CFinal' && (
                    <>{/**uso un fragment para enviar mas de un elementos */}
                    <input type='text' placeholder='Provincia'
                    {...register('provincia',{
                        required:{
                            value:true,
                            message: 'Provincia es requerida'
                        }
                    })}
                    />
                    {errors.provincia && <span>{errors.provincia.message}</span>}
                    </>
                    )
                }
                <label htmlFor="foto">Foto</label>
                <input type='file' onChange={(e)=>{
                    console.log(e.target.files[0])
                    setValue('fotoDelUsuario',e.target.files[0].name)
                }} />
                <div className='checkLabel'>
                <label htmlFor='terminos'>Acepto</label>
                <input type="CheckBox" className='checkForm' {...register("terminos",{
                required:{
                    value:true,
                    message:"Debe aceptar terminos y condiciones",
                }
                })} 
                />
                {
                    errors.terminos && <span>
                        {errors.terminos.message}
                    </span>
                }
                </div>
                <button type='submit' className='BotonForm'>Enviar</button>
                <pre>
                    {/** el null 2 es para que se separen y aparece en el 
                     * fondo todos los valores que voy cargando*/}
                    {JSON.stringify(watch(),null,2)}
                </pre>
            </form>
        </div>
    )
}

export default Contactos;
