import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ( { pages, siteName, logo } ) => {

    return (
        <nav className="navbar">
            <h1 className="navbar__heading">
                <Link to="/">
                    <img src={logo} alt={siteName} className="navbar__logo" />
                    <span className="navbar__title">{siteName}</span>
                </Link>
                </h1>
            <ul className="navbar__list">
                {
                    pages.map((page, index) => (
                        <li key={index} className="navbar__item"><Link className="navbar__link" to={page.url}>{page.name}</Link></li>
                    ))
                }
            </ul>
        </nav>
    )
};

export default Navbar;