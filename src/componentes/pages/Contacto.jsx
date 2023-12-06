import emailjs from '@emailjs/browser';
//import Button from 'react-bootstrap/Button';
import React from 'react';
import './Contactos.css';

export const Contacto = () => {

const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_lkxm7o7', 'template_fflqvxf', event.target, 'dIzhkGMG6_Ze_7U5M')
            .then(response => console.log(response))
            .catch(error => console.log(error))

    }
    return (
        <div className='div-form'>
           
            <form className='form-mail' onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name='user_name' placeholder='Ingrese el nombre' />
                

                <label>Email</label>
                <input type="email" name='user_email' placeholder='nombre@dominio.com'/>
                

                <label>Mensaje</label>
                <textarea name="user_message" id="" cols="30" rows="10"></textarea>
                
               
                <button class="btn primary">Enviar</button>
            </form>
        </div>
    )
}
export default Contacto