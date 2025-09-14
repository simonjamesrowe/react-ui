interface IAppProps {
    apiUrl: string;
    gaTrackingToken: string;
    hotJarTrackingToken: string;
    environment: string;
    apmUrl: string;
}

const properties: IAppProps = {
    apiUrl: window.API_URL || import.meta.env.VITE_API_URL || "https://api.simonjamesrowe.com",
    gaTrackingToken: window.GA_TRACKING_TOKEN || import.meta.env.VITE_GA_TRACKING_TOKEN || "UA-179384022-3",
    hotJarTrackingToken: window.HOT_JAR_TRACKING_TOKEN || import.meta.env.VITE_HOTJAR_ID || "2022739",
    environment: window.ENVIRONMENT || import.meta.env.VITE_ELASTIC_APM_ENVIRONMENT || "local",
    apmUrl: window.APM_URL || import.meta.env.VITE_ELASTIC_APM_SERVER_URL || "https://apm.simonjamesrowe.com"
}

export {properties};