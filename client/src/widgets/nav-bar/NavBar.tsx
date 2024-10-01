import { ADMIN_ROUTE, LOGIN_ROUTE } from "src/shared/utils/consts";
import { useState } from "react";
import classNames from "classnames";
import { NavLink } from "src/widgets/nav-bar/NavLink";
import { NavBarLogo } from "src/widgets/nav-bar/NavBarLogo";
import { NavBarBurgerButton } from "src/widgets/nav-bar/NavBarBurgerButton";
import { observer } from "mobx-react-lite";
import { LogoutButton } from "src/widgets/nav-bar/LogoutButton";
import { useStore } from "src/store/hooks/useStore";

export const NavBar = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user } = useStore();

  const handleOpen = () => setIsOpen((prevState) => !prevState);

  const navbarCn = classNames("w-full text-gray-700 bg-white md:pb-0", {
    "pb-3": isOpen,
  });
  const navCn = classNames(
    "flex gap-2 flex-col flex-grow md:flex md:justify-end md:flex-row",
    {
      flex: isOpen,
      hidden: !isOpen,
    },
  );

  return (
    <div className={navbarCn}>
      <div className={containerCn}>
        <div className={"flex flex-row items-center justify-between p-3"}>
          <NavBarLogo />
          <NavBarBurgerButton isOpen={isOpen} handleOpen={handleOpen} />
        </div>

        <nav className={navCn}>
          {user.isAuth ? (
            <>
              <NavLink to={ADMIN_ROUTE}>Admin Panel</NavLink>
              <LogoutButton />
            </>
          ) : (
            <NavLink to={LOGIN_ROUTE}>Log In</NavLink>
          )}
        </nav>
      </div>
    </div>
  );
});

const containerCn =
  "flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8";
