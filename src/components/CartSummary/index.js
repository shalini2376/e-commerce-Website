import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      // eslint-disable-next-line
      const {cartList} = value
      const totalPrice = cartList.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      )
      return (
        <div className="cart-summary-container">
          <h1>Order Total: {totalPrice}</h1>
          <p>{cartList.length} Items in cart</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
