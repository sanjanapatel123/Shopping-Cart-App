import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...cart, action.payload];
    }
    case "INCREASE_QTY": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
    case "DECREASE_QTY": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    }
    case "DELETE_ITEM": {
      return cart.filter((item) => item.id !== action.payload.id);
    }
  }
}
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (newCartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: newCartItem });
  };
  const increaseQty = (id) => {
    dispatch({ type: "INCREASE_QTY", payload: { id: id } });
  };
  const decreaseQty = (id) => {
    dispatch({ type: "DECREASE_QTY", payload: { id: id } });
  };
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: { id: id } });
  };
  return (
    <CartContext.Provider value={{ cart, addItem, increaseQty, decreaseQty ,handleDelete}}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
export default CartProvider;
