interface IAppProps {
    apiUrl: string
}


const properties: IAppProps = {
    // @ts-ignore
    apiUrl: process.env.API_URL || "https://api-jx-staging.simonjamesrowe.com"
}
console.log("apiUrl is", process.env)

// @ts-ignore
export {properties};