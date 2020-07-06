interface IAppProps {
    apiUrl: string
}



const properties: IAppProps = {
    // @ts-ignore
    apiUrl: window.API_URL || "https://api.simonjamesrowe.com"
}

// @ts-ignore
export {properties};