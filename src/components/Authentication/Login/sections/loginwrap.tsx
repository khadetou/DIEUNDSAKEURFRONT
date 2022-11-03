import Link from "next/link";
import React, { useEffect, useState } from "react";
import { User, Lock } from "react-feather";
import { FaEyeSlash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "hooks/index";
import { login, register, reset } from "redux/auth/authSlice";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const LoginWrap = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useAppDispatch();
  const { isError, message, isSuccess } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      toast.error(message.message);
    }
    if (isSuccess) {
      if (router.query && router.query.from) {
        router.push(router.query.from as string);
      } else {
        router.push("/dashboard");
      }
    }
    dispatch(reset());
  }, [isError, message, isSuccess, router, dispatch]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <section className="login-wrap">
      <div className="container">
        <div className="row log-in">
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
            <div className="theme-card">
              <div className="title-3 text-start">
                <h2>Log in</h2>
              </div>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <User className="tw-inline" />
                      </div>
                    </div>
                    <input
                      type="text"
                      name="email"
                      onChange={(e) => onChange(e)}
                      className="form-control"
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <Lock className="tw-inline" />
                      </div>
                    </div>
                    <input
                      type="password"
                      id="pwd-input"
                      name="password"
                      onChange={(e) => onChange(e)}
                      className="form-control"
                      placeholder="Password"
                      maxLength={8}
                      required
                    />
                    <div className="input-group-apend">
                      <div className="input-group-text">
                        <FaEyeSlash />
                        {/* <i id="pwd-icon" className="far fa-eye-slash"></i> */}
                      </div>
                    </div>
                  </div>
                  <div className="important-note">
                    password should be a minimum of 8 characters and should
                    contains letters and numbers
                  </div>
                </div>
                <div className="d-flex">
                  <label className="d-block mb-0" htmlFor="chk-ani">
                    <input
                      className="checkbox_animated color-2"
                      id="chk-ani"
                      type="checkbox"
                    />{" "}
                    <span>Remember me</span>
                  </label>
                  <a
                    href="forgot-password.html"
                    className="font-rubik text-color-2"
                  >
                    Forgot password ?
                  </a>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                  >
                    Log in
                  </button>
                  <Link
                    href="/register"
                    className="btn btn-dashed btn-pill color-2"
                  >
                    Create Account
                  </Link>
                </div>
                <div className="divider">
                  <h6>or</h6>
                </div>
                <div>
                  <h6>Log in with</h6>
                  <div className="row social-connect">
                    <div className="col-6">
                      <a
                        href="https://www.facebook.com/"
                        className="btn btn-social btn-flat facebook p-0"
                      >
                        <i className="fab fa-facebook-f"></i>
                        <span>Facebook</span>
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="https://twitter.com/"
                        className="btn btn-social btn-flat twitter p-0"
                      >
                        <i className="fab fa-twitter"></i>
                        <span>Twitter</span>
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="https://account.google.com/"
                        className="btn btn-social btn-flat google p-0"
                      >
                        <i className="fab fa-google"></i>
                        <span>Google</span>
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="https://www.linkedin.com/"
                        className="btn btn-social btn-flat linkedin p-0"
                      >
                        <i className="fab fa-linkedin-in"></i>
                        <span>Linkedin</span>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginWrap;
