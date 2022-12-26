import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../../src/assets/shopping-bag.svg';

import { CartContext } from '../../contexts/Cart.context';

import './CartIcon.styles.scss';


function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    return setIsCartOpen(!isCartOpen);
  }

  return(
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
}

export default CartIcon;