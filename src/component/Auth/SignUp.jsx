import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {auth, provider} from "../firebase/Firebase.jsx"
import {signInWithPopup} from "firebase/auth"
import localStorage from "redux-persist/es/storage"
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [value, setValue] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleClick = () => {
        signInWithPopup(auth,provider).then((data) =>{
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
            
        })
    }
    useEffect(() => {
        setValue(localStorage.getItem("email"))
        
    })

  const handleSignUp = () => {
    const data = {
        username,
        email,
        password,
    };
    localStorage.setItem(email, JSON.stringify(data));
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">   
        <div className="w-50 w-xl-25 rounded-5 p-5 bg-white">
            <form onSubmit={handleSignUp}>
                <h1 className="fs-5 text-center mb-4">Sign Up</h1>
                <div className="form-floating mb-3">
                    <input type="username" className="form-control" id="floatingSignInUsername" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="floatingSignInUsername">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingSignInInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="floatingSignInInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingSignInPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-secondary mx-1" onClick={handleSignUp}>Sign up</button>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button className="border-0 btn btn-primary" onClick={handleClick}>Sign up with google</button>
                </div>
                <hr />
                <div className="text-center my-2 d-flex justify-content-center">
                    Already have an account?&nbsp;
                    <Link to="/signin" className="nav-link text-decoration-underline ">Sign In</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp