import Button from "../exploreButton/Button"
import "./footer.scss"
import logo1 from "../../assets/whtaup.png"

const Footer = () => {
  return (
    <div className="footer-container">

      <Button />
      <a href="https://wa.me/+919599454571?text=i need money">
      <img src={logo1} alt="logo" />
      </a>
    
    </div>
  )
}

export default Footer
