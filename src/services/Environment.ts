interface AppProps {
    apiUrl: String
}

const properties: AppProps = {
    apiUrl: process.env.API_URL || "https://api-jx-staging.simonjamesrowe.com"
}

// @ts-ignore
export {AppProps, properties};