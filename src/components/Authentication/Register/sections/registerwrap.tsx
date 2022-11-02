import Link from "next/link";
import React from "react";

const Registerwrap = () => {
  return (
    <section>
      <div className="container">
        <div className="row log-in sign-up">
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
            <div className="theme-card">
              <div className="title-3 text-start">
                <h2>Sign up</h2>
              </div>
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i data-feather="user"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i data-feather="mail"></i>
                      </div>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i data-feather="lock"></i>
                      </div>
                    </div>
                    <input
                      type="password"
                      id="pwd-input"
                      className="form-control"
                      placeholder="Password"
                      maxLength={8}
                      required
                    />
                    <div className="input-group-apend">
                      <div className="input-group-text">
                        <i id="pwd-icon" className="far fa-eye-slash"></i>
                      </div>
                    </div>
                  </div>
                  <div className="important-note">
                    password should be a minimum of 8 characters and should
                    contains letters and numbers
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                  >
                    Create Account
                  </button>
                  <Link
                    href="/login"
                    className="btn btn-dashed btn-pill color-2"
                  >
                    Log in
                  </Link>
                </div>
                <div className="divider">
                  <h6>or</h6>
                </div>
                <div>
                  <h6>Sign up with</h6>
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

export default Registerwrap;
