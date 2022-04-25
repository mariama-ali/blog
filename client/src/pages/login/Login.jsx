import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your passoword..." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginResgisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  )
}
