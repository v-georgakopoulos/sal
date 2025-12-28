import { Link } from "react-router-dom"
import faviconSal from "../../assets/favicon-Sal.png"
import footerBanner from "../../assets/footer.jpg"

import "./footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <img src={faviconSal} alt={"Sal athens logo"} />    
            <div className="social-links">
                <Link to={`https://www.instagram.com/sal_athens`} target="_blank">INSTAGRAM</Link>
                <Link to={`https://www.behance.net/Sal_athens`} target="_blank">BEHANCE</Link>
                <Link to={`https://www.linkedin.com/in/sal-athens`} target="_blank">LINKEDIN</Link>
            </div>
            </div>
            <p>© Sal Athens {new Date().getFullYear()} VAT EL 132657068</p>
            <img className="footer-banner" src={footerBanner} alt="Footer Banner" />
        </footer>
    )
}

export default Footer