import React from "react";

const TopBody = () => {
  return (
    <div className="container-fluid">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-6">
            <div className="page-header-left">
              <h3>
                Ajouter un agent
                <small>Bienvenue dans le panneau d’administration</small>
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
              <li className="breadcrumb-item active">Agents</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBody;
