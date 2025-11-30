import Logo from "../assets/Logo.png"
import Sign from "../assets/user-interface 1.png"
// import'./nav.css'
import'../styles/nav.css'
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div><img src={Logo} className="logo" alt=""/></div>
      <div className=" nav-txt ">
        <Link className="navbar-brand" to="/">Home</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand active" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand active" aria-current="page" to="/tripplanner">TripPlanner</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/destinations">Destinations</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="dvs">
        <Link to="/login">
          <img src={Sign} alt="" />
        <p className="sgnin">Sign IN</p>
              </Link>
      </div>
    </nav>
    </>
  )
}

export default Nav
