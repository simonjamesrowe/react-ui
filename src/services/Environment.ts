interface IAppProps {
    apiUrl: string;
    gaTrackingToken: string;
    hotJarTrackingToken: string;
    environment: string;
    apmUrl: string;
}

const properties: IAppProps = {
    // @ts-ignore
    apiUrl: window.API_URL || "https://api.simonjamesrowe.com",
    // @ts-ignore
    gaTrackingToken: window.GA_TRACKING_TOKEN || "UA-179384022-3",

    // @ts-ignore
    hotJarTrackingToken: window.HOT_JAR_TRACKING_TOKEN || "2022739",

    // @ts-ignore
    environment: window.ENVIRONMENT || "local",

    // @ts-ignore
    apmUrl: window.APM_URL || "https://apm.simonjamesrowe.com"
}

// @ts-ignore
export {properties};