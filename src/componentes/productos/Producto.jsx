import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';
import { AddShoppingCart } from '@mui/icons-material';
import './Producto.css';
import ProductosLista from '../productos/ProductosLista';
//import fotos from '../../assets/imagenes';
import PropTypes from "prop-types";
import { useState } from 'react';
import fuente from './ProductoData.jsx';
import DeleteIcon from '@mui/icons-material/Delete';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

//export default function Producto ({fuente:{id,nombre,rating,precio,descripcion,descripcionExpandida,imagen}}) {
  export default function Producto({product : {id,nombre,rating,precio,descripcion,descripcionExpandida,imagen} }){
  {/*fuente.map((producto,index)=>(
    <DatosProductos
    key={index}
    id={producto.id}
    nombre={producto.nombre}
    rating={producto.rating}
    precio={producto.precio}
    descripcion={producto.descripcion}
    descripcionExpandida={producto.descripcionExpandida}
    imagen={producto.imagen}
  />
  ))*/}
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        action={//formato de precio
          <Typography className='action' variant='h5' color='textSecondary'>
            {accounting.formatMoney(precio)}
          </Typography>
        }
        title={nombre}
        subheader="en oferta"
      />
      <CardMedia className='media'
        component="img"
        height="194"
        image=''
        alt={imagen}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/** boton del carrito de material ui */}
        <IconButton aria-label="add to Cart" onClick={'hola'}>
          <AddShoppingCart />
        </IconButton>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <IconButton>
          <DeleteIcon fontSize="large" onClick={'borrar'}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph>
            {descripcionExpandida}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}

