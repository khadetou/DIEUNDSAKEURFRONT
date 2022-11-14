import { useAppSelector } from "hooks/index";

const TopBody = () => {
  const { user } = useAppSelector((store) => store.auth);
  return (
    <div className="container-fluid">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-6">
            <div className="page-header-left">
              <h3>
                {user && user.roles === "admin" && "Profil Administrateur"}
                {user && user.roles === "user" && "Profil Utilisateur"}
                {user && user.roles === "agency" && `Agence ${user.name}`}
                {user &&
                  user.roles === "owner" &&
                  `Proprièté de ${user.firstname} {user.lastname}`}

                <small>Bienvenue sur le panneau d'administration</small>
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
              <li className="breadcrumb-item active">Manage users</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBody;
