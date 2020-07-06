interface IAppProps {
    apiUrl: string
}



const properties: IAppProps = {
    // @ts-ignore
    apiUrl: window.API_URL || "http://localhost:8080"
}

// @ts-ignore
export {properties};