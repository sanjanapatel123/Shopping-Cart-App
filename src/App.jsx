import Products from "./components/Products";
import CartProvider from "./context/CartProvider";
import Header from "./components/Header";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        autoClose={600}
        hideProgressBar={true}
      ></ToastContainer>
      <Header></Header>
      <Products></Products>
    </CartProvider>
  );
}

export default App;
