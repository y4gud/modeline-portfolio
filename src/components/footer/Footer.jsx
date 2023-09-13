import "./footer.css"
import {FiInstagram} from "react-icons/fi"
import {FaPinterest} from "react-icons/fa"
import {AiTwotoneHeart} from "react-icons/ai"
import LOGO from "../../assets/O-modeline.jpg"


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"><img className="logo" src={LOGO} alt="Logo" /></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://pinterest.com"><FaPinterest/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; O-Modeline Fashion. All rights reserved</small>
        <p>Made with {<AiTwotoneHeart style={{color: "red", width: "30px", margin: 0}}/>} by BumbleBee</p>
      </div>
    </footer>
  )
}

export default Footer