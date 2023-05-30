import errorImage from "../assets/images/bread-error-img.jpg";
import {useRouteError} from "react-router-dom";

import {Link} from "react-router-dom";

const ErrorPage = () => {

    const err = useRouteError();
    
    return(
        <div className="error-page-container">
            <div className="img-container">
                <img className="error-img" src={errorImage} />
            </div>\
            <div className="oops-container">
                <h2>Oops!!</h2>
            </div>
            <div className="error-msg">
                <p>Sorry! This should not have happened. Please retry.</p>
                <p>ERROR: {err.statusText}. ERROR CODE: {err.status}</p>
            </div>
            <Link to="/">
                <button className="retry-btn">Retry</button>
            </Link>
        </div>
    )
}

export default ErrorPage;