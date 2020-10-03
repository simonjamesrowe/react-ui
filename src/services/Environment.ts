interface IAppProps {
    apiUrl: string,
    gaTrackingToken: string
}

const properties: IAppProps = {
    // @ts-ignore
    apiUrl: window.API_URL || "https://api.simonjamesrowe.com",
    // @ts-ignore
    gaTrackingToken: window.GA_TRACKING_TOKEN || "UA-179384022-3",
}

// @ts-ignore
export {properties};