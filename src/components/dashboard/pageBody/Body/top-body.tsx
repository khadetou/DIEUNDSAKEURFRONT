import React from "react";
import Link from "next/link";
const TopBody = () => {
  return (
    <div className="container-fluid">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-6">
            <div className="page-header-left">
              <h3>
                Dashboard
                <small>Bienvenue au Tableau de Bord</small>
              </h3>
            </div>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb pull-right">
              <li className="breadcrumb-item">
                <Link href="/">
                  <i className="fa fa-home"></i>
                </Link>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBody;
