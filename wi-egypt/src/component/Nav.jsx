import Logo from "../assets/Logo.png"
import Sign from "../assets/user-interface 1.png"
import'./nav.css'
function Nav() {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div><img src={Logo} className="logo" alt=""/></div>
      <div className="container-fluid nav-txt ">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
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
