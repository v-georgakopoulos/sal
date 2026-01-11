import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../utils/cookie-utils";

export const useCookieConsent = () => {
    const [consent, setConsent] = useState(null);

    useEffect(() => {
        const savedConsent = getCookie("user_consent");
        if (savedConsent) {
            setConsent(savedConsent);
        }
    }, []);

    const accept = () => {
        setCookie("user_consent", "accepted", 180);
        setConsent("accepted");
        window.dispatchEvent(new Event("cookie-consent-accepted"));
    };


    const reject = () => {
        setCookie("user_consent", "rejected", 180);
        setConsent("rejected");
    };

    return { consent, accept, reject };
};
