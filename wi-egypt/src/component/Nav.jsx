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
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> */}
          {/* <span className="navbar-toggler-icon"></span> */}
        {/* </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand active" aria-current="page" to="/about">About</Link>
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
        <a href="">
          <img src={Sign} alt="" />
        <p className="sgnin">Sign IN</p>
              </a>
      </div>
    </nav>
    </>
  )
}

export default Nav
