import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h3 className="text-2xl">Welcome to My Shit...</h3>
            <nav className="routing">
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;