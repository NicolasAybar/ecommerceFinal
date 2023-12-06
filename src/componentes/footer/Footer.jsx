import facebook from '../../assets/imagenes/facebook.svg';
import twitter from '../../assets/imagenes/twitter.svg';
import instagran from '../../assets/imagenes/instagram.svg';
import './Footer.css';

function Footer(){
    return(
        <footer className='footer'>
            <div className='sb__footer-copyright'>
                @{new Date().getFullYear()} Nicolas Aybar.Trabajo practico-Todos los derechos reservados.
            </div>
            <div className='socialmedia'>
                <p><img src={facebook} alt=""/></p>
                <p><img src={twitter} alt=""/></p>
                <p><img src={instagran} alt=""/></p>
            </div>
        </footer>
        
    )
}
export default Footer;