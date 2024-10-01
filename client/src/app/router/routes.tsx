import { createBrowserRouter, redirect } from "react-router-dom";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  SHOP_ROUTE,
} from "src/shared/utils/consts";
import { ShopPage } from "src/pages/ShopPage";
import { AdminPage } from "src/pages/AdminPage";
import { DevicePage } from "src/pages/DevicePage";
import { BasketPage } from "src/pages/BasketPage";
import { SignInPage } from "src/pages/SignInPage";
import { MainLayout } from "src/app/layout/MainLayout";
import { SignUpPage } from "src/pages/SignUpPage";
import { ProtectedRoute } from "src/app/router/ProtectedRoute";

const protectedRoutes = [ADMIN_ROUTE];

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute protectedRoutes={protectedRoutes}>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "*",
        loader: () => {
          return redirect(SHOP_ROUTE);
        },
      },
      {
        path: SHOP_ROUTE,
        element: <ShopPage />,
      },
      {
        path: ADMIN_ROUTE,
        element: <AdminPage />,
      },
      {
        path: LOGIN_ROUTE,
        element: <SignInPage />,
      },
      {
        path: SIGNUP_ROUTE,
        element: <SignUpPage />,
      },
      {
        path: DEVICE_ROUTE + "/:id",
        element: <DevicePage />,
      },
      {
        path: BASKET_ROUTE,
        element: <BasketPage />,
      },
    ],
  },
]);
