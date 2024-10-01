import { SHOP_ROUTE } from "src/shared/utils/consts";
import { Link } from "react-router-dom";

export const NavBarLogo = () => {
  return (
    <Link
      to={SHOP_ROUTE}
      className={
        "text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline text-decoration-none text-inherit"
      }
    >
      Device Shop
    </Link>
  );
};
