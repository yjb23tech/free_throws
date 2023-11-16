import logo from "../images/react-logo.png";

function NavBar() {
    return (
        <nav className="nav">
            <img src= {logo} className="react-logo" />
            <ul className="nav-items">
                <li>Practice</li>
                <li>Makes</li>
                <li>Perfect</li>
            </ul>
        </nav>
    )
}

export default NavBar; 