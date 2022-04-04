import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { signin } from "../state/actions/userActions";

function SigninScreen() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;

  const dispatch = useDispatch();

  const redirect = window.location.search
    ? `/${window.location.search.split("=")[1]}`
    : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo && userInfo.length !== 0) {
      navigate(redirect);
    }
    return () => {};
  }, [userInfo]);

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Sign-In</h2>
          </li>
          <li>{loading && <div>Loading...</div>}</li>
          <li>{error && <div>{error}</div>}</li>

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
            <button type="submit" className="button primary">
              Signin
            </button>
          </li>
          <li>New to Shop?</li>
          <li>
            <Link
              to={
                redirect === "/"
                  ? "/register"
                  : `/register?redirect=${redirect.split("/")[1]}`
              }
              className="button secondary text-center"
            >
              Create your Shop account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SigninScreen;
