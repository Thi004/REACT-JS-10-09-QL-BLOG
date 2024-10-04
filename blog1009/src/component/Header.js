import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "./MyContext";

function Header() {
    let {currentUser, setCurrentUser} = useContext(MyContext);
    let navigate = useNavigate();
    console.log(currentUser);
    const logout = () => {
        setCurrentUser({})
        navigate("/login")
    }
    return (
        <>
            <div className=' box-shadow row header navbar navbar-expand-lg navbar-light bg-light border-bottom'>
                <div className='col-2 logo'>
                    <Link id={'brand'} className="navbar-brand" href="#" to={'/'}>
                        <img id={'logo'}
                             src="https://logo.com/image-cdn/images/kts928pd/production/3d0a1942ea617825e187c3c9a3811a5d93a331be-370x366.png?w=1080&q=72&fm=webp"
                             alt="Blog Logo"
                             className="d-inline-block align-text-top"/>
                        Trà Chiều
                    </Link>
                </div>
                <div className='col-7 navbar'>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/my-blog'}>My Blog</Link>
                            </li>
                            <li className="nav-item">
                                {currentUser.username &&
                                    <Link className="nav-link" to={'/posts'}>Post Blog</Link>}
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="col-3 right-header">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {(currentUser.username === 'undefined' || currentUser.username === '') && (
                                <Link className="nav-link" href="#" to={'/login'}><i className="fas fa-user"></i> Login</Link>)}
                            {currentUser.username && currentUser.username !== '' &&  <img id={'avatar'} src="https://via.placeholder.com/50" alt="Avatar"
                                 className="rounded-circle mr-2"/>}
                            {currentUser.username && currentUser.username !== '' &&  <span className={'nav-link'}>{'Hello, ' + currentUser.username}</span>}
                        </li>
                        <li className="nav-item">
                            {currentUser.username && currentUser.username !== '' && <a href="#" className="nav-link" onClick={logout}><i className="fas fa-sign-out-alt"></i> Logout</a>}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;