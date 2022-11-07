import { useAppDispatch, useAppSelector } from "hooks/index";
import { User, FileText, LogOut } from "react-feather";
import Image from "next/image";
import { initials } from "utils/index";
import Link from "next/link";
import { logout } from "redux/auth/authSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((store) => store.auth);
  const { push } = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      push("/login");
    }
  }, [isAuthenticated]);
  return (
    <li className="profile-avatar onhover-dropdown ">
      {user && user.image.url ? (
        <div>
          <Image
            src={user.image.url}
            width={user.image.width}
            height={user.image.height}
            className="img-fluid"
            alt=""
          />
        </div>
      ) : (
        <div className="tw-font-semibold tw-rounded-full tw-p-2 tw-text-xs tw-bg-red-600 tw-text-white tw-cursor-pointer">
          {user && initials(user.firstname, user.lastname)}
        </div>
      )}
      <ul className="profile-dropdown onhover-show-div !tw-w-[194px]">
        <li>
          <Link href="/dashboard/user-profile">
            <span>Mon Compte</span>
            <User />
          </Link>
        </li>
        <li>
          <Link href="/dashboard/listing">
            <span>Listing</span>
            <FileText />
          </Link>
        </li>
        <li>
          <a onClick={() => dispatch(logout())} className="tw-cursor-pointer">
            <span>Se Deconnecter</span>
            <LogOut />
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Profile;
