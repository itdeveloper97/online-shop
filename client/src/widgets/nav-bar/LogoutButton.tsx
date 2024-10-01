import React from "react";
import { defaultNavLinkCn } from "src/widgets/nav-bar/styles";
import { useStore } from "src/store/hooks/useStore";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "src/shared/utils/consts";

export const LogoutButton = () => {
  const store = useStore();
  const navigate = useNavigate();

  const handleClick = () => {
    store.user.logOut(() => navigate(LOGIN_ROUTE));
  };
  return (
    <button onClick={handleClick} type={"button"} className={defaultNavLinkCn}>
      Log Out
    </button>
  );
};
