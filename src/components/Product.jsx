import { useCart } from "../context/CartProvider";
import styles from "./Product.module.css";
import { toast, ToastContainer } from "react-toastify";

const Product = ({ id, title, price, img }) => {
  const { addItem, cart } = useCart();

  const handleAdd = () => {
    for (let item of cart) {
      if (item.id === id) {
        toast.error("Item already added to cart");
        return;
      }
    }
    const newCartItem = {
      id: id,
      title: title,
      price: price,
      img: img,
      quantity: 1,
    };
    addItem(newCartItem);
    toast.info("Item added!!");
  };
  return (
    <div className={styles.product}>
      <img src={img} alt={title} className={styles.productImage} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>&#8377;{price}</p>
      <button onClick={handleAdd} className={styles.addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
