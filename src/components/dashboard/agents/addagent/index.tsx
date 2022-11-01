import React from "react";
import TopBody from "./top-body";

const BodyAddUser = () => {
  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Add agent details</h5>
              </div>
              <div className="card-body admin-form">
                <form className="row gx-3">
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      First name <span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
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
                      <div className="dropdown-menu text-start">
                        <a className="dropdown-item" href="javascript:void(0)">
                          Male
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Female
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Phone number <span className="font-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="enter your mobile number"
                      required
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Date of birth <span className="font-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      placeholder="18 april"
                      id="datepicker"
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Email Address <span className="font-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="enter your email"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>
                      Password <span className="font-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>
                      Confirm Password <span className="font-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-group col-sm-12">
                    <label>Description</label>
                    <textarea className="form-control" rows={4}></textarea>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Address"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Zip code</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter pin code"
                    />
                  </div>
                </form>
                <div className="dropzone-admin mb-0">
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
                <div className="form-btn">
                  <button
                    type="button"
                    className="btn btn-pill btn-gradient color-4"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-pill btn-dashed color-4"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAddUser;
