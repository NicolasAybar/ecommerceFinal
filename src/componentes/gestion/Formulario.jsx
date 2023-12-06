import { useState } from "react";

const Formulario = ({ agregarPocion }) => {

    const [nuevaPocion, setNuevaPocion] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaPocion.trim() !== '') {
            agregarPocion(nuevaPocion);
            setNuevaPocion('')
        }
    };
    return (
        <>
            <h2>Formulario de contacto</h2>
            <form onSubmit={handleSubmit}>
                <label >Nombre</label>
                <input type="text" value={nuevaPocion} onChange={(e) = setNuevaPocion(e.target.value)} placeholder="Nueva Pocion" />
                <label>Email</label>
                <input type="email" placeholder="Ingrese el email"/>
                <label>Mensaje</label>
                <textarea name="user_message" id="" cols="30" rows="10"></textarea>
                <button type="submit">Agregar</button>
            </form>
        </>
    )
}
export default Formulario;