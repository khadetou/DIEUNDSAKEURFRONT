import { useAppDispatch, useAppSelector } from "hooks/index";
import React, { useEffect, useState } from "react";
import TopBody from "./top-body";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { UpdateUser } from "redux/auth/authSlice";
import { Check } from "react-feather";
import Image from "next/image";

const BodyAddUserWizard = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );
  const [formeData, setFormData] = useState({
    firstname: (user && user.firstname) || "",
    lastname: (user && user.lastname) || "",
    agencename: (user && user.agencename) || "",
    address: (user && user.address) || "",
    email: (user && user.email) || "",
    phone: (user && user.phone) || "",
    role: (user && user.role) || "",
    description: (user && user.description) || "",
    password: "",
    password2: "",
  });
  const { push, query } = useRouter();
  const [type, setType] = useState(
    (query.agence && query.agence) || (query.owner && query.owner) || ""
  );
  const {
    email,
    firstname,
    lastname,
    password,
    password2,
    phone,
    agencename,
    description,
    address,
  } = formeData;
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [validate, setValidate] = useState(false);
  const [validate2, setValidate2] = useState(false);
  const [image, setImage] = useState<string | ArrayBuffer | null>("");
  const [imagePrev, setImagePrev] = useState<string | ArrayBuffer | null>("");

  useEffect(() => {
    if (!isAuthenticated) {
      push("/login");
    }
    if (isSuccess) {
      toast.success("Votre Profile a été modifié avec succès");
      setTimeout(() => {
        push("/dashboard/add-property");
      }, 5000);
    }
    if (isError) {
      toast.error(message.message);
    }
  }, [isAuthenticated, isSuccess, isError]);

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
        role: type,
        agencename,
        description,
        image,
        password,
        password2,
      };
      dispatch(UpdateUser(tokenData));
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formeData, [e.target.name]: e.target.value });
  };

  const nextStep1 = () => {
    setValidate(true);
    if (firstname !== "" && lastname !== "" && phone !== "" && type !== "") {
      if (type === "agence" && agencename === "") {
        setStep1(false);
      } else {
        setStep1(true);
      }
    } else {
      setStep1(false);
    }
  };

  const prevStep1 = () => {
    setStep1(false);
  };

  const nextStep2 = () => {
    setValidate2(true);
    if (email !== "" && description !== "" && address !== "") {
      setStep2(true);
    }
  };

  const prevStep2 = () => {
    setStep2(false);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    console.log(e.target.files![0].size);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
        setImagePrev(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files![0]);
  };

  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid property-wizard horizontal-wizard">
        <div className="row wizard-box">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body admin-wizard">
                <div className="wizard-step-container">
                  <ul className="wizard-steps">
                    <li
                      className={`step-container step-1 ${
                        step1 ? "disabled" : "active"
                      }`}
                    >
                      <div className="media">
                        <div className="step-icon">
                          <Check
                            className={`!tw-inline ${
                              step1 ? "!tw-block" : "!tw-hidden"
                            }`}
                          />
                          <span>1</span>
                        </div>
                        <div className="media-body">
                          <h5>Get started</h5>
                          <h6>Account information</h6>
                        </div>
                      </div>
                    </li>
                    <li
                      className={`step-container step-2 ${
                        step1 ? (step2 ? "disabled" : "active") : ""
                      }`}
                    >
                      <div className="media">
                        <div className="step-icon">
                          <Check
                            className={`!tw-inline ${
                              step2 ? "!tw-block" : "!tw-hidden"
                            }`}
                          />
                          <span>2</span>
                        </div>
                        <div className="media-body">
                          <h5>Login details</h5>
                          <h6>Set your email</h6>
                        </div>
                      </div>
                    </li>
                    <li
                      className={`step-container step-3 ${
                        step2 ? "active" : ""
                      }`}
                    >
                      <div className="media">
                        <div className="step-icon">
                          <Check
                            className={`!tw-inline ${
                              step3 ? "!tw-block" : "!tw-hidden"
                            }`}
                          />
                          <span>3</span>
                        </div>
                        <div className="media-body">
                          <h5>Upload files</h5>
                          <h6>Successfully submitted</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="wizard-form-details log-in">
                    <div
                      className={`wizard-step-1 ${
                        step1 ? "d-none" : "d-block"
                      }`}
                    >
                      <form
                        className={`row ${validate && "was-validated"}`}
                        id="needs-validation "
                        onSubmit={(e) => e.preventDefault()}
                        noValidate
                      >
                        <div className="form-group col-md-4 col-sm-6">
                          <label>
                            Je suis un <span className="font-danger">*</span>
                          </label>
                          <div
                            className={`dropdown ${
                              (type !== "" &&
                                validate &&
                                "!tw-border !tw-border-[#198754]") ||
                              (type === "" &&
                                validate &&
                                "!tw-border !tw-border-[#dc3545]")
                            }`}
                          >
                            <span
                              className="dropdown-toggle font-rubik"
                              data-bs-toggle="dropdown"
                            >
                              <span>
                                {type === ""
                                  ? "Agence ou Propriétaire"
                                  : type === "agence"
                                  ? "Agence"
                                  : "Propriétaire"}
                              </span>{" "}
                              <i className="fas fa-angle-down"></i>
                            </span>
                            <div className="dropdown-menu text-start">
                              <a
                                className={`dropdown-item ${
                                  type === "agence" ? "tw-bg-[#e9ecef80]" : ""
                                }`}
                                onClick={() => setType("agence")}
                              >
                                Agence
                              </a>
                              <a
                                className={`dropdown-item ${
                                  type === "owner" ? "tw-bg-[#e9ecef80]" : ""
                                }`}
                                onClick={() => setType("owner")}
                              >
                                Propriétaire
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-4 col-sm-6">
                          <label>
                            Prénom <span className="font-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="user_name"
                            name="firstname"
                            className="form-control"
                            placeholder="enter your name"
                            onChange={(e) => onChange(e)}
                            value={firstname}
                            required
                          />
                        </div>
                        <div className="form-group col-md-4 col-sm-6">
                          <label>
                            Last name <span className="font-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="last_name"
                            name="lastname"
                            value={lastname}
                            onChange={(e) => onChange(e)}
                            className="form-control"
                            placeholder="enter your surname"
                            required
                          />
                        </div>

                        <div className="form-group col-sm-6">
                          <label>
                            Phone number <span className="font-danger">*</span>
                          </label>
                          <input
                            placeholder="Enter your mobile number"
                            className="form-control"
                            name="phone"
                            id="tbNumbers"
                            onInput={() => console.log("maxLengthCheck(this)")}
                            type="tel"
                            value={phone}
                            onChange={(e) => onChange(e)}
                            onKeyDown={() =>
                              console.log("javascript:return isNumber(event)")
                            }
                            maxLength={9}
                            required
                          />
                        </div>
                        {type === "agence" && (
                          <div className="form-group col-md-6">
                            <label>
                              Le Nom de votre agence{" "}
                              <span className="font-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              placeholder="Dieundsakeur"
                              type="text"
                              name="agencename"
                              onChange={onChange}
                              id="datepicker"
                              required
                            />
                          </div>
                        )}
                        <div className="next-btn text-end col-sm-12">
                          <a
                            className="btn btn-gradient color-4 next1 btn-pill"
                            onClick={nextStep1}
                          >
                            Next <i className="fas fa-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </form>
                    </div>
                    <div
                      className={`wizard-step-2 ${
                        step1 ? (step2 ? "d-none" : "d-block") : "d-none"
                      }`}
                    >
                      <form
                        className={`row ${validate2 ? "was-validated" : ""}`}
                        id="needs-validation1"
                        noValidate
                      >
                        <div className="form-group col-md-4 col-sm-6">
                          <label>
                            Email Address <span className="font-danger">*</span>
                          </label>
                          <input
                            type="email"
                            id="email_add"
                            className="form-control"
                            placeholder="enter your email"
                            name="email"
                            onChange={onChange}
                            value={email}
                            required
                          />
                        </div>
                        <div className="form-group col-md-4 col-sm-6">
                          <label>
                            Password <span className="font-danger">*</span>
                          </label>
                          <input
                            type="password"
                            id="pwdd"
                            className="form-control !tw-border-[#eee] !tw-bg-[url('')]"
                            name="password"
                            onChange={onChange}
                            placeholder="Enter your password"
                            required
                          />
                        </div>
                        <div className="form-group col-md-4">
                          <label>
                            Confirm Password{" "}
                            <span className="font-danger">*</span>
                          </label>
                          <input
                            type="password"
                            id="pwdd1"
                            name="password2"
                            onChange={onChange}
                            className="form-control !tw-border-[#eee] !tw-bg-[url('')]"
                            placeholder="Enter your password"
                            required
                          />
                        </div>
                        <div className="form-group col-sm-12">
                          <label>Description</label>
                          <textarea
                            name="description"
                            onChange={(e: any) => onChange(e)}
                            value={description}
                            className={`form-control ${
                              validate2 &&
                              description === "" &&
                              "!tw-border-[#dc3545] !tw-bg-[url('/images/svg/icon/error.svg')]"
                            }`}
                            rows={4}
                          ></textarea>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>Address</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control"
                            placeholder="Enter your Address"
                            value={address}
                            onChange={onChange}
                            required
                          />
                        </div>
                        {/* <div className="form-group col-sm-6">
                          <label>Zip code</label>
                          <input
                            type="number"
                            id="zip_code"
                            className="form-control"
                            placeholder="Enter pin code"
                            required
                          />
                        </div> */}
                        <div className="next-btn d-flex col-sm-12">
                          <a
                            type="button"
                            onClick={prevStep1}
                            className="btn btn-dashed color-4 prev1 btn-pill"
                          >
                            <i className="fas fa-arrow-left me-2"></i> Previous
                          </a>
                          <a
                            onClick={nextStep2}
                            className="btn btn-gradient color-4 next2 btn-pill !tw-text-white"
                          >
                            Next <i className="fas fa-arrow-right ms-2"></i>
                          </a>
                        </div>
                      </form>
                    </div>
                    <div
                      className={`wizard-step-3 ${
                        step2 ? "d-block" : "d-none"
                      }`}
                    >
                      <div className="dropzone-main">
                        <label>Media</label>
                        <form className="dropzone" id="multiFileUpload">
                          <div className="dz-message needsclick">
                            <label htmlFor="file">
                              <input
                                type="file"
                                id="file"
                                name="image"
                                className="!tw-hidden"
                                accept="images/*"
                                onChange={onFileChange}
                              />
                              {imagePrev ? (
                                <Image
                                  src={imagePrev as string}
                                  alt=""
                                  className="tw-rounded-md"
                                  width={200}
                                  height={200}
                                />
                              ) : (
                                <>
                                  <i className="fas fa-cloud-upload-alt"></i>
                                  <h6>Drop files here or click to upload.</h6>
                                </>
                              )}
                            </label>
                          </div>
                        </form>
                      </div>
                      <form onSubmit={onSubmit}>
                        <div className="next-btn d-flex">
                          <button
                            type="button"
                            className="btn btn-dashed color-4 prev2 btn-pill"
                            onClick={prevStep2}
                          >
                            <i className="fas fa-arrow-left me-2"></i> Previous
                          </button>
                          <button
                            type="submit"
                            className="btn btn-gradient color-4 next3 btn-pill"
                          >
                            submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAddUserWizard;
