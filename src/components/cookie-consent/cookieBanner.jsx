import { useCookieConsent } from "../../hooks/useCookieConsent";
import "./cookieBanner.scss";

const CookieBanner = () => {
    const { consent, accept, reject } = useCookieConsent();

    if (consent) return null;

    return (
        <div className="cookie-banner">
            <p>
                We use cookies to improve your experience.
                Read our <a href="/terms">Terms of Use & Privacy Policy</a>.
            </p>
            <div className="actions">
                <button className="reject" onClick={reject}>
                    Reject
                </button>
                <button className="accept" onClick={accept}>
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
