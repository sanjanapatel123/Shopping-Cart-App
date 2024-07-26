import { useCart } from "../context/CartProvider";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, handleDelete } = useCart();

  let totalAmount = 0;
  for (let item of cart) {
    totalAmount += item.price * item.quantity;
  }
  if (cart.length === 0) {
    return <h1>Cart is empty</h1>;
  }
  return (
    <div className={styles.cart}>
      <h2 className={styles.cartHeading}>Shopping Cart</h2>
      <div>
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            {...cartItem}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            handleDelete={handleDelete}
          ></CartItem>
        ))}
      </div>
      <h1>TotalAmout : &#8377;{totalAmount}</h1>
    </div>
  );
};

export default Cart;
