import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className="not-fund">
            <h2>
                Sorry Page Not Found
            </h2>
            <p>
                This Page is Cannot Found!
            </p>
            <Link to="/">Back To The Home Page...</Link>
        </div>
     );
}
 
export default NotFound;