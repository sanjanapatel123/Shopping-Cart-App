import { data } from "../data";
import Product from "./Product";
import styles from "./Products.module.css";
import Container from "./Container";

const Products = () => {
  return (
    <Container>
      <h1>Best of ARC</h1>
      <div className={styles.products}>
        {data.map((item) => (
          <Product key={item.id} {...item}></Product>
        ))}
      </div>
    </Container>
  );
};

export default Products;
