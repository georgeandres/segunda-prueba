
import {Footer}from '../components/Footer';
import '../styles/Login.css';
import { Link } from 'react-router-dom';


export const Login = () => {

  
  return (
    
    <>
    <body id='login'>
          

        <div className="container-form">
        <div className="information">
          <div className="info-childs">
            <h2>Bienvenido</h2>
            <p>Registrate para acceder a nuestros servicios.</p>
            <Link to={"/register"}><input  type="button"  value="Registrarse"/></Link>
          </div>
        </div>
          <div className='form-information'>
            <div className='form-information-childs'>
               <h2>Iniciar sesión</h2>
                <div className='icons'>
                 <i class='bx bxl-facebook-circle'></i>
                 <i class='bx bxl-instagram'></i>
               </div>
               <p>Si ya tienes una cuenta. Inicia sesión</p>
               <form className='form'>
                  
                  <label>
                    <i class='bx bx-envelope'></i>
                    <input type="email" placeholder="Correo electrónico"/>
                  </label>
                 
                  <label>
                  <i class='bx bxs-lock'></i>
                  <input type="password" placeholder="Contraseña"/>
                  </label>
                  <input type='submit' value='Iniciar Sesión'/>
               </form>
            </div>

          </div>
        </div>
       
      </body>

        
    <Footer/>
    </>
  )
}
