import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as PalaceLogo } from "../../assets/images/crown.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { UserContext } from "../../contexts/User.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <FontAwesomeIcon
            icon={["fab", "fort-awesome"]}
            size="3x"
            color="grey"
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN-OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
