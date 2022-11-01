import React from "react";

const SignUpBody = () => {
  return (
    <div className="page-wrapper">
      <div className="authentication-box">
        <div className="container-fluid">
          <div className="row log-in">
            <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 form-login">
              <div className="card">
                <div className="card-body">
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
                          type="text"
                          className="form-control"
                          placeholder="Enter email address"
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
                          maxLength={8}
                          placeholder="Password"
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
                        type="button"
                        className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                      >
                        Create Account
                      </button>
                      <a
                        href="login.html"
                        className="btn btn-dashed btn-pill color-2"
                      >
                        Log in
                      </a>
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
                            href="https://accounts.google.com/"
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
            <div className="col-xxl-7 col-xl-7 offset-xxl-1 col-lg-6 auth-img">
              <img
                src="https://themes.pixelstrap.com/sheltos/assets/images/svg/2.svg"
                className="bg-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpBody;
