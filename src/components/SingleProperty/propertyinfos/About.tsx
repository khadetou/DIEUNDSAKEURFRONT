import { useAppSelector } from "hooks/index";

const About = () => {
  const { property } = useAppSelector((store) => store.property);
  const descriptions = property.description.split("\n\n", 3);
  return (
    <div className="desc-box">
      <div className="menu-top" id="searchBar">
        <div className="container">
          <ul className="nav">
            <li className="active">
              <a className="" href="#about">
                A Propos
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
            <p>{descriptions[0]}</p>
          </div>
          <div className="col-sm-4">
            <p>{descriptions[2]}</p>
          </div>
          <div className="col-sm-4">
            <p>{descriptions[3]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
