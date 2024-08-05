import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <h1>Oopss...</h1>
            <h3>Something went wrong</h3>
            <p>Error {err.status} : {err.statusText}</p>
        </div>

    )
}
export default Error;