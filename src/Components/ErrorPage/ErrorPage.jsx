import { Link, useRouteError } from "react-router-dom";



const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>Oops !!!</h1>
            <p>NOT FOUND YOUR EMOTIONS...</p>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <p>Page NOT Found</p>
                    <p>Go Back Where you from </p>
                    <Link to="/"><button>Go HOME</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;