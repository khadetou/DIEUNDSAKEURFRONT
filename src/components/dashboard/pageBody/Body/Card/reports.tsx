import React from "react";

const Reports = () => {
  return (
    <div className="col-xl-4 xl-6">
      <div className="card">
        <div className="card-header pb-0">
          <h5>Management Reports</h5>
        </div>
        <div className="card-body management-table">
          <div className="table-responsive">
            <table className="table table-bordernone">
              <tbody>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src="/images/svg/icon/pdf.png"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="media-body">
                        <h6>Report 8/10/22 - 15/10/22</h6>
                        <span>Created 16/10/22</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="text_file.txt" download>
                      <i data-feather="download" className="light-font"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src="/images/svg/icon/microsoft.png"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="media-body">
                        <h6>Report 20/10/22 - 25/10/22</h6>
                        <span>Created 24/10/22</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="text_file.txt" download>
                      <i data-feather="download" className="light-font"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src="/images/svg/icon/excel.png"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="media-body">
                        <h6>Report 30/10/22 - 5/11/22</h6>
                        <span>Created 1/11/22</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="text_file.txt" download>
                      <i data-feather="download" className="light-font"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src="/images/svg/icon/pdf.png"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="media-body">
                        <h6>Report 10/11/22 - 15/11/22</h6>
                        <span>Created 17/11/22</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="text_file.txt" download>
                      <i data-feather="download" className="light-font"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src="/images/svg/icon/excel.png"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="media-body">
                        <h6>Report 20/11/22 - 25/11/22</h6>
                        <span>Created 28/11/22</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="text_file.txt" download>
                      <i data-feather="download" className="light-font"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
