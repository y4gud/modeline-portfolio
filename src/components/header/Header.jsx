import "./header.css"
import ME from "../../assets/Leemah-image.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 sty>Thanks for stopping by!</h5>
        <h1 className="header__tag">O-MODELINE</h1>
        <h5 className="text-light">All Purposes Fashion House</h5>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="my profile img" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header