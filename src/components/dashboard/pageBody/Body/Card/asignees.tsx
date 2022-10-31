import React from "react";

const Asignees = () => {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h5>Assignees</h5>
        </div>
        <div className="card-body assign-table pt-0">
          <div className="table-responsive">
            <table className="table table-bordernone">
              <tbody>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src="/images/avatar/1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="media-body">
                        <a href="user-profile.html">
                          <h6>Bob Frapples</h6>
                        </a>

                        <span>Pumbing</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 className="font-danger">10</h6>
                    <span>Open</span>
                  </td>
                  <td>
                    <h6 className="font-warning">3</h6>
                    <span>Escaleted</span>
                  </td>
                  <td>
                    <h6 className="font-success">126</h6>
                    <span>Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src="/images/avatar/3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="media-body">
                        <a href="user-profile.html">
                          <h6>Greta Life</h6>
                        </a>
                        <span>Pest control</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 className="font-danger">8</h6>
                    <span>Open</span>
                  </td>
                  <td>
                    <h6 className="font-warning">20</h6>
                    <span>Escaleted</span>
                  </td>
                  <td>
                    <h6 className="font-success">154</h6>
                    <span>Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src="/images/avatar/5.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="media-body">
                        <a href="user-profile.html">
                          <h6>Zack Lee</h6>
                        </a>
                        <span>others</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 className="font-danger">5</h6>
                    <span>Open</span>
                  </td>
                  <td>
                    <h6 className="font-warning">18</h6>
                    <span>Escaleted</span>
                  </td>
                  <td>
                    <h6 className="font-success">79</h6>
                    <span>Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src="/images/avatar/6.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="media-body">
                        <a href="user-profile.html">
                          <h6>Paige Turner</h6>
                        </a>
                        <span>Pest control</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 className="font-danger">15</h6>
                    <span>Open</span>
                  </td>
                  <td>
                    <h6 className="font-warning">7</h6>
                    <span>Escaleted</span>
                  </td>
                  <td>
                    <h6 className="font-success">145</h6>
                    <span>Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src="/images/avatar/4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="media-body">
                        <a href="user-profile.html">
                          <h6>Mary Goround</h6>
                        </a>
                        <span>Pumbing</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 className="font-danger">10</h6>
                    <span>Open</span>
                  </td>
                  <td>
                    <h6 className="font-warning">3</h6>
                    <span>Escaleted</span>
                  </td>
                  <td>
                    <h6 className="font-success">126</h6>
                    <span>Completed</span>
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

export default Asignees;
