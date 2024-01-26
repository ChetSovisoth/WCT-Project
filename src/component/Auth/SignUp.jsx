import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import localStorage from "redux-persist/es/storage";
import { auth } from "../firebase/Firebase";
import { setAuthSignUp } from "../../Redux/authSlice";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignUp = (e) => {
    e.preventDefault();

    authSignUp(username, email, password);
  };

  const authSignUp = async () => {
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      dispatch(setAuthSignUp(user.user));
      await auth.currentUser.updateProfile({
        displayName: username,
      });

      localStorage.setItem("user", JSON.stringify(user.user));
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setErr(err.message);
    }
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <div className="w-50 w-xl-25 rounded-5 p-5 bg-white">
        <form onSubmit={handleSignUp}>
          <h1 className="fs-5 text-center mb-4">Sign Up</h1>
          <div className="form-floating mb-3">
            <input
              type="username"
              className="form-control"
              id="floatingSignInUsername"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="floatingSignInUsername">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingSignInInput"
              placeholder="name@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingSignInInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingSignInPassword"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-secondary mx-1">Sign up</button>
          </div>
          <hr />
          {err && <span>{err}</span>}
          <div className="text-center my-2 d-flex justify-content-center">
            Already have an account?&nbsp;
            <Link to="/signin" className="nav-link text-decoration-underline ">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
