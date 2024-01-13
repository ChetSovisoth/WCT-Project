//import SignUp from "./SignUp";
import { useState } from "react"
import { Link } from "react-router-dom";
const SignIn = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleSignIn = () => {
        console.log(email);
        console.log(password);
    }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">   
        <div className="w-50 w-xl-25 rounded-5 p-5 bg-white">
            <h1 className="fs-5 text-center mb-4 fw-bold">Sign In</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingSignInInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="floatingSignInInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingSignInPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>     
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary mt-3 mx-1" onClick={handleSignIn}>Sign In</button>
            </div>       
            <hr />
            <div className="text-center my-2 d-flex justify-content-center">
                Don&apos;t have an account?&nbsp;
                <Link to="/signup" className="nav-link text-decoration-underline ">Sign Up</Link>
            </div>
        </div>
    </div>

  )
}

export default SignIn