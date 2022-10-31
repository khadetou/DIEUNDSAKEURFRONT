import React from "react";

const BodyAddProperty = () => {
  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-header-left">
                <h3>
                  Add property
                  <small>Welcome to admin panel</small>
                </h3>
              </div>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb pull-right">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="fa fa-home"></i>
                  </a>
                </li>
                <li className="breadcrumb-item active">My properties</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Add property details</h5>
              </div>
              <div className="card-body admin-form">
                <form className="row gx-3">
                  <div className="form-group col-sm-4">
                    <label>Property Type</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="office,villa,apartment"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Property Status</label>
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle font-rubik"
                        data-bs-toggle="dropdown"
                      >
                        <span>For Sale</span>{" "}
                        <i className="fas fa-angle-down"></i>
                      </span>
                      <div className="dropdown-menu text-start">
                        <a className="dropdown-item" href="javascript:void(0)">
                          For Rent
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          For Sale
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Property Price</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$2800"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Max Rooms</label>
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle font-rubik"
                        data-bs-toggle="dropdown"
                      >
                        <span>1</span> <i className="fas fa-angle-down"></i>
                      </span>
                      <div className="dropdown-menu text-start">
                        <a className="dropdown-item" href="javascript:void(0)">
                          2
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          3
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          4
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          5
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          6
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Beds</label>
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle font-rubik"
                        data-bs-toggle="dropdown"
                      >
                        <span>1</span> <i className="fas fa-angle-down"></i>
                      </span>
                      <div className="dropdown-menu text-start">
                        <a className="dropdown-item" href="javascript:void(0)">
                          2
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          3
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          4
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          5
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          6
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Baths</label>
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle font-rubik"
                        data-bs-toggle="dropdown"
                      >
                        <span>1</span> <i className="fas fa-angle-down"></i>
                      </span>
                      <div className="dropdown-menu text-start">
                        <a className="dropdown-item" href="javascript:void(0)">
                          2
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          3
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          4
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          5
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          6
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Area</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="85 sq ft"
                    />
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Price</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$3000"
                    />
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Agencies</label>
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle font-rubik"
                        data-bs-toggle="dropdown"
                      >
                        <span>Premiere</span>{" "}
                        <i className="fas fa-angle-down"></i>
                      </span>
                      <div className="dropdown-menu text-start">
                        <a className="dropdown-item" href="javascript:void(0)">
                          Blue Sky
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Zephyr
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Premiere
                        </a>
                      </div>
                    </div>
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
                      placeholder="Address of your property"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Zip code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="39702"
                    />
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Any Country</label>
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle font-rubik"
                        data-bs-toggle="dropdown"
                      >
                        <span>Austria</span>{" "}
                        <i className="fas fa-angle-down"></i>
                      </span>
                      <div className="dropdown-menu text-start">
                        <a className="dropdown-item" href="javascript:void(0)">
                          Austria
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Brazil
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          New york
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          USA
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Any City</label>
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle font-rubik"
                        data-bs-toggle="dropdown"
                      >
                        <span>Amreli</span>{" "}
                        <i className="fas fa-angle-down"></i>
                      </span>
                      <div className="dropdown-menu text-start">
                        <a className="dropdown-item" href="javascript:void(0)">
                          Gandhinagar
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Bharuch
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Amreli
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Ahmadabad
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-sm-4">
                    <label>Landmark</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="landmark place name"
                    />
                  </div>
                </form>
                <div className="dropzone-admin">
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
                <form className="row gx-3">
                  <div className="form-group col-sm-12">
                    <label>video (mp4)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="mp4 video link"
                    />
                  </div>
                  <div className="form-group col-sm-12 mb-0">
                    <label>Additional features</label>
                    <div className="additional-checkbox">
                      <label htmlFor="chk-ani">
                        <input
                          className="checkbox_animated color-4"
                          id="chk-ani"
                          type="checkbox"
                        />{" "}
                        Emergency Exit
                      </label>
                      <label htmlFor="chk-ani1">
                        <input
                          className="checkbox_animated color-4"
                          id="chk-ani1"
                          type="checkbox"
                        />{" "}
                        CCTV
                      </label>
                      <label htmlFor="chk-ani2">
                        <input
                          className="checkbox_animated color-4"
                          id="chk-ani2"
                          type="checkbox"
                          checked
                        />{" "}
                        Free Wi-Fi
                      </label>
                      <label htmlFor="chk-ani3">
                        <input
                          className="checkbox_animated color-4"
                          id="chk-ani3"
                          type="checkbox"
                        />{" "}
                        Free Parking In The Area
                      </label>
                      <label htmlFor="chk-ani4">
                        <input
                          className="checkbox_animated color-4"
                          id="chk-ani4"
                          type="checkbox"
                        />{" "}
                        Air Conditioning
                      </label>
                      <label htmlFor="chk-ani5">
                        <input
                          className="checkbox_animated color-4"
                          id="chk-ani5"
                          type="checkbox"
                        />{" "}
                        Security Guard
                      </label>
                      <label htmlFor="chk-ani6">
                        <input
                          className="checkbox_animated color-4"
                          id="chk-ani6"
                          type="checkbox"
                          checked
                        />{" "}
                        Terrace
                      </label>
                      <label htmlFor="chk-ani7">
                        <input
                          className="checkbox_animated color-4"
                          id="chk-ani7"
                          type="checkbox"
                        />{" "}
                        Laundry Service
                      </label>
                      <label htmlFor="chk-ani8">
                        <input
                          className="checkbox_animated color-4"
                          id="chk-ani8"
                          type="checkbox"
                        />{" "}
                        Elevator Lift
                      </label>
                      <label htmlFor="chk-ani9">
                        <input
                          className="checkbox_animated color-4"
                          id="chk-ani9"
                          type="checkbox"
                          checked
                        />{" "}
                        Balcony
                      </label>
                    </div>
                  </div>
                  <div className="form-btn col-sm-12">
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAddProperty;
