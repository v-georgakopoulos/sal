let analyticsLoaded = false;

export const loadGoogleAnalytics = () => {

    if (analyticsLoaded) return;


    if (!import.meta.env.PROD) return;

    analyticsLoaded = true;

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
    script.async = true;
    document.head.appendChild(script);


    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-XXXXXXX", {
        anonymize_ip: true,
    });
};
