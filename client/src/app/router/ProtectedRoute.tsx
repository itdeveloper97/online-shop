import React, { PropsWithChildren, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE, SIGNUP_ROUTE } from "src/shared/utils/consts";
import { useStore } from "src/store/hooks/useStore";
import { observer } from "mobx-react-lite";
import { Center, Loader } from "@mantine/core";

type Props = {
  protectedRoutes: string[];
};
export const ProtectedRoute = observer(
  ({ children, protectedRoutes }: PropsWithChildren<Props>) => {
    const location = useLocation();
    const store = useStore();

    if (
      !store.user.isAuth &&
      protectedRoutes.some((route) => location.pathname.includes(route))
    ) {
      // user is not authenticated
      return <Navigate to={LOGIN_ROUTE} />;
    }
    if (
      store.user.isAuth &&
      (location.pathname.includes(LOGIN_ROUTE) ||
        location.pathname.includes(SIGNUP_ROUTE))
    ) {
      return <Navigate to={SHOP_ROUTE} />;
    }

    return <>{children}</>;
  },
);
