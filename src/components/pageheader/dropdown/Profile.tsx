import { User, FileText, LogIn } from "react-feather";

const Profile = () => {
  return (
    <ul className="profile-dropdown onhover-show-div">
      <li>
        <a href="user-profile.html">
          <span>Account </span>
          <User />
        </a>
      </li>
      <li>
        <a href="listing.html">
          <span>Listing</span>
          <FileText />
        </a>
      </li>
      <li>
        <a href="login.html">
          <span>Log in</span>
          <LogIn />
        </a>
      </li>
    </ul>
  );
};

export default Profile;
