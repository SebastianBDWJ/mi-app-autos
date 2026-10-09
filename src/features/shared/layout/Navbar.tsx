import "../../../styles/layout/navbar.css"
import { NavLink } from "react-router-dom"
import Logo from "../components/Logo"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* En TO Aqui escojemos a donde queremos ir, podemos usar las rutas con las que esta en app.tsx */}
        <NavLink 
          to="/"
          className="navbar__brand"
          aria-label="AutoShop — Inicio"
        >
          <Logo /> {/* Lo que se hace es que cuando le demos al Logo nos lleve al home */}
        </NavLink>
 
        <nav className="navbar__links" aria-label="Navegación principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inicio
          </NavLink>
 
          <NavLink
            to="/cars"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Autos
          </NavLink>
 
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar