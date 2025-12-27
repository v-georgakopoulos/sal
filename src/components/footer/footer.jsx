import { Link } from "react-router-dom"
import faviconSal from "../../assets/favicon-Sal.png"
import footerBanner from "../../assets/footer.jpg"

import "./footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <img src={faviconSal} alt={"Sal athens logo"} />    
            </div>
            <div className="social-links">
                <Link>INSTAGRAM</Link>
                <Link>BEHANCE</Link>
                <Link>LINKEDIN</Link>
            </div>
            <p>©Sal Athens {new Date().getFullYear()} VAT EL 132657068</p>
            <img className="footer-banner" src={footerBanner} alt="Footer Banner" />
        </footer>
    )
}

export default Footer