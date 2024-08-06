import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image from './img/_a36ca9e4-cf9c-4c96-a48f-4fc6f74fd06d.jpeg';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={image} alt="" />
            <h1>Room Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;