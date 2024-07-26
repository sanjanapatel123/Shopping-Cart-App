import styles from "./CartItem.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const CartItem = ({
  id,
  price,
  img,
  title,
  quantity,
  increaseQty,
  decreaseQty,
  handleDelete,
}) => {
  return (
    <div className={styles.cartItem}>
      {/* left */}
      <div className={styles.imageTitle}>
        <div className={styles.imgContainer}>
          <img src={img} alt={title} className={styles.cartImage} />
        </div>
        <h3>{title}</h3>
      </div>
      {/* right */}
      <div className={styles.otherControls}>
        <div className={styles.qty}>
          <button onClick={() => decreaseQty(id)}>
            <AiOutlineMinus />
          </button>
          <span className={styles.qtydisplay}>{quantity}</span>
          <button onClick={() => increaseQty(id)}>
            <AiOutlinePlus />
          </button>
        </div>
        <p>&#8377;{price * quantity}</p>
        <button className={styles.removeitem} onClick={() => handleDelete(id)}>
          <ImCross />
        </button>
      </div>
      {/* ------------------old---------------------------- */}
      {/* <p>id: {id}</p>
      <p>
        price: {price} + {quantity}={price * quantity}
      </p>
      <p>title: {title}</p>
      <p>quantity: {quantity}</p>
      <button onClick={() => increaseQty(id)}>increase</button>
      <button onClick={() => decreaseQty(id)}>decrease</button>
      <button onClick={() => handleDelete(id)}>delete</button> */}
    </div>
  );
};

export default CartItem;
