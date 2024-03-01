
import { NavLink, Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Imagen o Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
       <NavLink to="/" className="nav-link">Inicio</NavLink>
       <NavLink to="/" className="nav-link">Solicitar Servicio</NavLink>
       <NavLink to="/" className="nav-link">Quienes Somos</NavLink>
       <NavLink to="/contact" className="nav-link">Contacto</NavLink>
       <NavLink to="/login" className="nav-link">Iniciar Sesión</NavLink>
       
             </div>
    </div>
  </div>
</nav>



       <Outlet/> 
    </>

  )
}
