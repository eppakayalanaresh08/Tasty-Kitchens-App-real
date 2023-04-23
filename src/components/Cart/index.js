import CartContext from '../../context/CartContext'

import Header from '../Header'

import EmptyCartView from '../EmptyCartView'

import CartListView from '../CartListView'

import CartTotal from '../CartTotal'

import Footer from '../Footer'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptyView = cartList.length === 0

      return (
        <>
          <Header act8veTab="CART" />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container" data-testid="cartItem">
                <div className="cart-headings-container">
                  <p className="cart-headings item">Item</p>
                  <p className="cart-headings quantity">Quantity</p>
                  <p className="cart-headings price">Price</p>
                  <p className="cart-headings">Remove</p>
                </div>
                <CartListView />
                <CartTotal />
              </div>
            )}
          </div>
          <Footer />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
