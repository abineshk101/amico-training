import { HashLink as NavLink } from "react-router-hash-link"

const Header = () => {
  return (
    <>
      <header class="sticky-top" style={{backgroundColor:"#f8f9fa"}}>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <img width="145px" src={require("./images/amico-logo.png")} alt="amico logo"></img>
            <button class="navbar-toggler border-0  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><img style={{ width: "48px" }}
                class="rounded-2" src={require("./images/responsive-option.png")} alt=""></img>
            </button>
            <div class="collapse navbar-collapse justify-content-end mt-2 " id="navbarNav">
              <ul id="nav-content" class="navbar-nav w-75 justify-content-around nav_ul">
                <li class="nav-item">
                  <NavLink class="nav-link focus-link-offset-3" to="/#home_bg">HOME</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">ABOUT</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/#services">SERVICES</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/career">CAREER</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contact-us">CONTACT US</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header