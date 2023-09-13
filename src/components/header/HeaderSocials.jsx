import {FaInstagram} from "react-icons/fa"
import {FaSnapchat} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://instagram.com" target="_blank" rel="noreferrer"> <FaInstagram/></a>
        <a href="https://snapchat.com" target="_blank" rel="noreferrer"><FaSnapchat/></a>
    </div>
  )
}

export default HeaderSocials