import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <div className='row header navbar navbar-expand-lg navbar-light bg-light border-bottom'>
                <div className='col-2 logo'>
                    <a id={'brand'} className="navbar-brand" href="#">
                        <img id={'logo'} src="https://logo.com/image-cdn/images/kts928pd/production/3d0a1942ea617825e187c3c9a3811a5d93a331be-370x366.png?w=1080&q=72&fm=webp" alt="Blog Logo"
                             className="d-inline-block align-text-top"/>
                        Trà Chiều
                    </a>
                </div>
                <div className='col-8 navbar'>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="col-2 right-header">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to={'/login'}>
                                <i className="bi bi-person-circle"></i>
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;