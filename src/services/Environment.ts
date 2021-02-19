interface IAppProps {
    apiUrl: string,
    gaTrackingToken: string,
    hotJarTrackingToken: string
}

const properties: IAppProps = {
    // @ts-ignore
    apiUrl: window.API_URL || "https://api.simonjamesrowe.com",
    // @ts-ignore
    gaTrackingToken: window.GA_TRACKING_TOKEN || "UA-179384022-3",

    // @ts-ignore
    hotJarTrackingToken: window.HOT_JAR_TRACKING_TOKEN || "2022739",
}

// @ts-ignore
export {properties};