import React from "react";
import TopBody from "./top-body";

const BodyAddAgentWizard = () => {
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
                    <li className="step-container step-1 active">
                      <div className="media">
                        <div className="step-icon">
                          <i data-feather="check"></i>
                          <span>1</span>
                        </div>
                        <div className="media-body">
                          <h5>Get started</h5>
                          <h6>Account information</h6>
                        </div>
                      </div>
                    </li>
                    <li className="step-container step-2">
                      <div className="media">
                        <div className="step-icon">
                          <i data-feather="check"></i>
                          <span>2</span>
                        </div>
                        <div className="media-body">
                          <h5>Login details</h5>
                          <h6>Set your email</h6>
                        </div>
                      </div>
                    </li>
                    <li className="step-container step-3">
                      <div className="media">
                        <div className="step-icon">
                          <i data-feather="check"></i>
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
                    <div className="wizard-step-1 d-block">
                      <form className="row" id="needs-validation" noValidate>
                        <div className="form-group col-md-4 col-sm-6">
                          <label>
                            First name <span className="font-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="user_name"
                            className="form-control"
                            placeholder="enter your name"
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
                            className="form-control"
                            placeholder="enter your surname"
                            required
                          />
                        </div>
                        <div className="form-group col-md-4 col-sm-6">
                          <label>
                            Gender <span className="font-danger">*</span>
                          </label>
                          <div className="dropdown">
                            <span
                              className="dropdown-toggle font-rubik"
                              data-bs-toggle="dropdown"
                            >
                              <span>Gender</span>{" "}
                              <i className="fas fa-angle-down"></i>
                            </span>
                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Male
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Female
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>
                            Phone number <span className="font-danger">*</span>
                          </label>
                          <input
                            placeholder="Enter your mobile number"
                            className="form-control"
                            name="mobnumber"
                            id="tbNumbers"
                            onInput={() => console.log("maxLengthCheck(this)")}
                            type="tel"
                            onKeyDown={() =>
                              console.log("javascript:return isNumber(event)")
                            }
                            maxLength={9}
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>
                            Date of birth <span className="font-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            placeholder="18 april"
                            id="datepicker"
                            required
                          />
                        </div>
                        <div className="next-btn text-end col-sm-12">
                          <button
                            type="submit"
                            className="btn btn-gradient color-4 next1 btn-pill"
                          >
                            Next <i className="fas fa-arrow-right ms-2"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="wizard-step-2 d-none">
                      <form className="row" id="needs-validation1" noValidate>
                        <div className="form-group col-md-4 col-sm-6">
                          <label>
                            Email Address <span className="font-danger">*</span>
                          </label>
                          <input
                            type="email"
                            id="email_add"
                            className="form-control"
                            placeholder="enter your email"
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
                            className="form-control"
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
                            className="form-control"
                            placeholder="Enter your password"
                            required
                          />
                        </div>
                        <div className="form-group col-sm-12">
                          <label>Description</label>
                          <textarea
                            className="form-control"
                            rows={4}
                          ></textarea>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>Address</label>
                          <input
                            type="text"
                            id="address"
                            className="form-control"
                            placeholder="Enter your Address"
                            required
                          />
                        </div>
                        <div className="form-group col-sm-6">
                          <label>Zip code</label>
                          <input
                            type="number"
                            id="zip_code"
                            className="form-control"
                            placeholder="Enter pin code"
                            required
                          />
                        </div>
                        <div className="next-btn d-flex col-sm-12">
                          <button
                            type="button"
                            className="btn btn-dashed color-4 prev1 btn-pill"
                          >
                            <i className="fas fa-arrow-left me-2"></i> Previous
                          </button>
                          <button
                            type="submit"
                            className="btn btn-gradient color-4 next2 btn-pill"
                          >
                            Next <i className="fas fa-arrow-right ms-2"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="wizard-step-3 d-none">
                      <div className="dropzone-main">
                        <label>Media</label>
                        <form
                          className="dropzone"
                          id="multiFileUpload"
                          action="https://themes.pixelstrap.com/upload.php"
                        >
                          <div className="dz-message needsclick">
                            <i className="fas fa-cloud-upload-alt"></i>
                            <h6>Drop files here or click to upload.</h6>
                          </div>
                        </form>
                      </div>
                      <div className="next-btn d-flex">
                        <button
                          type="button"
                          className="btn btn-dashed color-4 prev2 btn-pill"
                        >
                          <i className="fas fa-arrow-left me-2"></i> Previous
                        </button>
                        <button
                          type="button"
                          className="btn btn-gradient color-4 next3 btn-pill"
                        >
                          submit
                        </button>
                      </div>
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

export default BodyAddAgentWizard;
