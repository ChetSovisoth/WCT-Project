import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/Firebase";
import { useDispatch } from "react-redux";
import { setAuthSignIn } from "../../Redux/authSlice";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSignIn = async (e) => {
    authSignIn(email, password);
    e.preventDefault();
  };

  const authSignIn = async (email, password) => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      dispatch(setAuthSignIn(user.user));
      localStorage.setItem("user", JSON.stringify(user.user));
      navigate("/");
    } catch (err) {
      setErr("Invalid Credential");
    }
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <div className="w-50 w-xl-25 rounded-5 p-5 bg-white">
        <form onSubmit={handleSignIn}>
          <h1 className="fs-5 text-center mb-4 fw-bold">Sign In</h1>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingSignInInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingSignInInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingSignInPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary mt-3 mx-1">Sign In</button>
          </div>
        </form>
        {err && <span>{err}</span>}
        <hr />
        <div className="text-center my-2 d-flex justify-content-center">
          Don&apos;t have an account?&nbsp;
          <Link to="/signup" className="nav-link text-decoration-underline ">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
