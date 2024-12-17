import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid d-flex justify-content-start">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navcontainer">
                            <li className="nav-item">
                                <Link className="nav-link navbtn" to="/">
                                    Начало
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbtn" to="/car/all">
                                    Всички коли
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navbtn" to="/add-car">
                                    Добави кола
                                </Link>
                            </li>
                        </ul>
                
                    </div>
                </div>
            </nav>
        </div>

    )
}