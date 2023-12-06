import DatosPrtoductos from './ProductosLista.jsx';
import fuente from './ProductoData.jsx';

function vectorProducto(){
    return(
        <div>
            {fuente.map((producto, index)=>(
                <DatosPrtoductos
                    key={index}
                    id={producto.id}
                    nombre={producto.nombre}
                    rating={producto.rating}
                    precio={producto.precio}
                    descripcion={producto.descripcion}
                    descripcionExpandida={producto.descripcionExpandida}
                    imagen={producto.imagen}
                    />
            ))}
        </div>
    )
}
export default vectorProducto;