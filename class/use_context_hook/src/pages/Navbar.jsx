import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="App">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}