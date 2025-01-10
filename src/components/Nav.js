import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/menu">MENU</Link>
                </li>
                <li>
                    <Link to="/reservations">RESERVATIONS</Link>
                </li>
                <li>
                    <Link to="/order-online">ORDER ONLINE</Link>
                </li>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
            </ul>
        </nav>
    )
}