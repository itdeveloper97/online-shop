import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { defaultNavLinkCn } from "src/widgets/nav-bar/styles";

export const NavLink = ({
  children,
  to,
}: PropsWithChildren<{ to: string }>) => {
  const { pathname } = useLocation();
  return (
    <Link
      className={classNames(defaultNavLinkCn, {
        "bg-transparent hover:text-gray-900 hover:bg-gray-200":
          !pathname.includes(to),
        "text-gray-900 bg-gray-200 outline-none shadow-outline":
          pathname.includes(to),
      })}
      to={to}
    >
      {children}
    </Link>
  );
};
