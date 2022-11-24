const About = () => {
  return (
    <div className="desc-box">
      <div className="menu-top" id="searchBar">
        <div className="container">
          <ul className="nav">
            <li className="active">
              <a className="" href="#about">
                about
              </a>
            </li>
            <li>
              <a className="" href="#feature">
                feature
              </a>
            </li>
            <li>
              <a className="" href="#gallery">
                gallery
              </a>
            </li>
            <li>
              <a className="" href="#video">
                video
              </a>
            </li>
            <li>
              <a className="" href="#details">
                details
              </a>
            </li>
            <li>
              <a className="" href="#floor_plan">
                Floor plan
              </a>
            </li>
            <li>
              <a className="" href="#location-map">
                Location
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about page-section" id="about">
        <h4>Property Brief</h4>
        <div className="row">
          <div className="col-sm-4">
            <p>
              Residences can be classified by and how they are connected to
              neighbouring residences and land. Different types of housing
              tenure can be used for the same physical type.
            </p>
          </div>
          <div className="col-sm-4">
            <p>
              connected residences might be owned by a single entity and leased
              out, or owned separately with an agreement covering the
              relationship between units and common.
            </p>
          </div>
          <div className="col-sm-4">
            <p>
              they are connected to neighbouring residences and land. Different
              types of housing tenure can be used for the same physical type.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
