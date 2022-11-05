import { useAppSelector } from "hooks/index";
import { Dispatch, FC } from "react";
import Body from "./Body";
import UserCard from "./Body/Card/user-card";
import Layout from "./Layout";

interface PageBodyProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  isTabletOrMobile: boolean;
}

const PageBody: FC<PageBodyProps> = ({ open, setOpen, isTabletOrMobile }) => {
  const { user } = useAppSelector((store) => store.auth);

  return (
    <Layout open={open} setOpen={setOpen} isTabletOrMobile={isTabletOrMobile}>
      {user.roles === "user" ? <UserCard /> : <Body />}
    </Layout>
  );
};

export default PageBody;
