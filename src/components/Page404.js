import { Link } from "react-router-dom";

const Page404 = () => {
    return ( 
        <div>
            <h2>404</h2>
            <p>Sorry yeah, that page cannot be found</p>

            <Link to='/'> Back to the home page</Link>
        </div>
     );
}
 
export default Page404;