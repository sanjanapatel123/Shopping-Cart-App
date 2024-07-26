import Modal from "../UI/Modal";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Container from "./Container";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartProvider";

const Header = () => {
  const { cart } = useCart();

  const quantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const [isModalOpen, setisModalOpen] = useState(false);
  const handleCart = () => {
    setisModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isModalOpen]);
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1>ARC shop</h1>
          <button
            className={styles.showCartButton}
            onClick={() => setisModalOpen(true)}
          >
            <span className={styles.cartIconNum}>
              <FaShoppingCart />
              {!!quantity && <span className={styles.number}>{quantity}</span>}
            </span>
            <span>Cart</span>
          </button>
        </nav>
      </Container>
      {isModalOpen && (
        <Modal handleCart={handleCart}>
          <Cart></Cart>
        </Modal>
      )}
    </header>
  );
};

export default Header;
