import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h3 className="text-2xl">Welcome to My Shit...</h3>
            <nav className="routing">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;