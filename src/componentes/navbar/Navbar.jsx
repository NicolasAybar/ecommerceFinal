import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart, StayPrimaryPortrait } from '@mui/icons-material';
import './Navbar.css';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
//import './Navbar.js';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="p" sx={{ flexGrow: 1 }} color={''}>
                        Mosaicos Beltran
                    </Typography>
                    <div className='funcionales'>
                        <div className='button'>
                            <Link to='/SignIn'>
                                <Button variant="outLined">
                                    <strong className='LetraMenu'>Sign In</strong>
                                </Button>
                            </Link>

                            <Link to='/'>
                                <Button variant="outLined">
                                    <strong className='LetraMenu'>Inicio</strong>
                                </Button>
                            </Link>

                            <Link to='/Contactos'>
                                <Button variant="outLined">
                                    <strong className='LetraMenu'>Contacto</strong>
                                </Button>
                            </Link>

                            <Link to='/Galeria'>
                                <Button variant="outLined">
                                    <strong className='LetraMenu'>Galeria</strong>
                                </Button>
                            </Link>

                        </div>


                        {/*<nav className='nav'>

                            <ul className='nav-List'>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/Productos">Productos</Link></li>
                                <li><Link to="/Galeria">Galeria</Link></li>
                                <li><Link to="/Contacto">Contacto</Link></li>
                            </ul>
    </nav>*/}

                        {/*<Button color="inherit" className='BoLogin'>Login</Button>*/}
                        <IconButton aria-label='show cart Items' color='inherit'>
                            <Badge badgeContent={4} color='secondary'>
                                <Link to='/Productos'><ShoppingCart className='carritoEnMenu' /></Link>
                            </Badge>

                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
        //probar menu

    );
}
