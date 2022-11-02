import { useAppDispatch, useAppSelector } from "hooks/index";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { register, reset } from "redux/auth/authSlice";
import { toast } from "react-toastify";

const Registerwrap = () => {
  const [show, setShow] = useState(false);
  const [confShow, setConfShow] = useState(false);
  const [formeData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const dispatch = useAppDispatch();
  const { isError, message, isSuccess, token } = useAppSelector(
    (state) => state.auth
  );

  const router = useRouter();

  useEffect(() => {
    if (isError) {
      if (Array.isArray(message.message)) {
        toast.error(message.message[0]);
      }
      toast.error(message.message);
      dispatch(reset());
    }

    if (isSuccess || token) {
      toast.success("User registered successfully!");
      router.push("/login");
      dispatch(reset());
    }
  }, [isError, isSuccess, message, dispatch, router, token]);

  const onChange = (e: any) => {
    setFormData({ ...formeData, [e.target.name]: e.target.value });
  };

  const { email, firstname, lastname, password, password2, phone } = formeData;

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Le mot de passe ne correspond pas!");
    }
    {
      const tokenData = {
        firstname,
        lastname,
        email,
        phone,
        password,
        password2,
      };
      dispatch(register(tokenData));
    }
  };
  return (
    <section>
      <div className="container">
        <div className="row log-in sign-up">
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
            <div className="theme-card">
              <div className="title-3 text-start">
                <h2>Sign up</h2>
              </div>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i data-feather="user"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      name="firstname"
                      value={firstname}
                      onChange={(e) => onChange(e)}
                      className="form-control"
                      placeholder="Saisissez Votre Prénom"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i data-feather="user"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      name="lastname"
                      value={lastname}
                      onChange={(e) => onChange(e)}
                      className="form-control"
                      placeholder="Saisissez Votre Prénom"
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
                      name="email"
                      onChange={(e) => onChange(e)}
                      value={email}
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
                        <i data-feather="mail"></i>
                      </div>
                    </div>
                    <input
                      type="phone"
                      name="phone"
                      onChange={(e) => onChange(e)}
                      value={phone}
                      className="form-control"
                      placeholder="Saisissez votre numéro de téléphone"
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
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      className="form-control"
                      placeholder="Mot de passe"
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
                      name="password2"
                      value={password2}
                      onChange={(e) => onChange(e)}
                      className="form-control"
                      placeholder="Confirmez voter mot de passe"
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
