import { Link } from "react-router-dom"
import "./TopBar.css"

export default function topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-f"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-discord"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">Home</Link></li>
                    <li className="topListItem"><Link className="link" to="/">About</Link></li>
                    <li className="topListItem"><Link className="link" to="/">Contact</Link></li>
                    <li className="topListItem"><Link className="link" to="/create">Create</Link></li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img src="https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg?auto=compresshttps&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="topImg" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSeacrhIcon fas fa-search"></i>
            </div>
        </div>
    )
}
