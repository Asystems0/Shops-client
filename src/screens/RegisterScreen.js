import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";

import { register } from "../state/actions/userActions";

function RegisterScreen() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [passError, setPassError] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = window.location.search
    ? `/${window.location.search.split("=")[1]}`
    : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === rePassword) {
      dispatch(register(name, email, password));
    } else {
      setTimeout(() => {
        setPassError("");
      }, 2000);
      setPassError("Password Not Match.");
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
    return () => {};
  }, [userInfo]);

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Create Account</h2>
          </li>
          <li>{loading && <div>Loading...</div>}</li>
          <li>{error && <div>{error}</div>}</li>
          <li>
            {passError && (
              <div style={{ color: "red", textAlign: "center" }}>
                {passError}
              </div>
            )}
          </li>

          <li>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="rePassword">Re-Enter Password</label>
            <input
              type="password"
              name="rePassword"
              id="rePassword"
              onChange={(e) => setRePassword(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="button primary">
              Register
            </button>
          </li>
          <li>Already have an account?</li>
          <li>
            <Link
              to={
                redirect === "/"
                  ? "/signin"
                  : `/signin?redirect=${redirect.split("/")[1]}`
              }
              className="button secondary text-center"
            >
              Sign-in
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default RegisterScreen;
