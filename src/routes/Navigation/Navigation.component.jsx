import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../component/CartIcon/CartIcon.component";
import CartDropdown from "../../component/CartDropdown/CardDropdown.component";

import { UserContext } from "../../contexts/User.context";
import { CartContext } from "../../contexts/Cart.context";

import { ReactComponent as CrwnLogo } from '../../assets/crown (1).svg';
import { signOutUser } from "../../utils/Firebase/Firebase.utils";

import './Navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return(
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGNOUT
              </span>
            ) : (
              <Link className="nav-link" to='/auth'>
                SIGN IN
              </Link>
            )
          }
          <CartIcon />
        </div>
        {
          isCartOpen && <CartDropdown />
        }
        
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
