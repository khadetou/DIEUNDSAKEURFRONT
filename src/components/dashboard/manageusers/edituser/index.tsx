import React from "react";
import TopBody from "./top-body";

const BodyEditUser = () => {
  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Edit user details</h5>
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
                      value="Paige"
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
                      value="Turner"
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
                        <span>Male</span> <i className="fas fa-angle-down"></i>
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
                      value="7596140312"
                      required
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Date of birth <span className="font-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      value="18 April "
                      id="datepicker"
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Email Address <span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value="turner@gmail.in"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>
                      Reset password <span className="font-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value="13535@12"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>
                      Confirm Password <span className="font-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value="13535@12"
                      required
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
                      value="Mina Road, Dubai, United Arab Emirates"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Zip code</label>
                    <input
                      type="number"
                      className="form-control"
                      value="39702"
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
                    Save
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

export default BodyEditUser;
