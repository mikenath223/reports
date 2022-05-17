import { ReactComponent as Logo } from "app/images/logo1.svg";
import { ReactComponent as MenuIcon } from "app/images/menu.svg";
import { getUsers } from "app/slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

export default function TopNav() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.data);
  const firstUser = user?.[0];
  const userInititals = `${firstUser?.firstName?.at(0)?.toUpperCase() || ""}${
    firstUser?.lastName?.at(-1)?.toUpperCase() || ""
  }`;
  const userName = `${firstUser?.firstName || ""} ${firstUser?.lastName || ""}`;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <header className="top-nav">
      <div className="flex-wrap logo-gap">
        <Logo className="" />
        <MenuIcon />
      </div>
      <div className="flex-wrap">
        <h1 className="initials">{userInititals}</h1>
        <span className="username">{userName}</span>
      </div>
    </header>
  );
}
