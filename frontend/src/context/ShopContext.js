
import React, {
    createContext,
    useContext,
    useEffect,
    useState
  } from "react";
  
  import products from "../data/Products";
  
  const ShopContext = createContext(null);
  
  function ShopProvider({ children }) {
  
    const [cart, setCart] = useState(() =>
      JSON.parse(localStorage.getItem("charmora_cart") || "[]")
    );
  
    const [wallet, setWallet] = useState(() =>
      Number(localStorage.getItem("charmora_wallet") ?? 2000)
    );
  
    const [orders, setOrders] = useState(() =>
      JSON.parse(localStorage.getItem("charmora_orders") || "[]")
    );
  
    const [transactions, setTransactions] = useState(() =>
      JSON.parse(localStorage.getItem("charmora_transactions") || "[]")
    );
  
    useEffect(() => {
      localStorage.setItem("charmora_cart", JSON.stringify(cart));
      localStorage.setItem("charmora_wallet", wallet);
      localStorage.setItem("charmora_orders", JSON.stringify(orders));
      localStorage.setItem("charmora_transactions", JSON.stringify(transactions));
    }, [cart, wallet, orders, transactions]);
  
    // ADD TO CART
    const addToCart = (product) => {
      setCart(prev => {
        const existing = prev.find(item => item.id === product.id);
  
        if (existing) {
          return prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
  
        return [...prev, { ...product, quantity: 1 }];
      });
    };
  
    // REMOVE ITEM
    const removeFromCart = (id) => {
      setCart(prev => prev.filter(item => item.id !== id));
    };
  
    // UPDATE QUANTITY
    const updateQuantity = (id, quantity) => {
      if (quantity < 1) return;
  
      setCart(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    };
  
    // CART TOTAL
    const cartTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  
    // ADD DEMO CREDITS
    const addDemoCredits = (amount) => {
      if (!Number.isFinite(amount) || amount <= 0 || amount > 5000) {
        return false;
      }
  
      setWallet(prev => prev + amount);
  
      setTransactions(prev => [{
        id: Date.now(),
        type: "Demo Credit",
        amount,
        date: new Date().toLocaleString()
      }, ...prev]);
  
      return true;
    };
  
    // CHECKOUT
    const checkout = () => {
      if (cart.length === 0) return "Cart is empty";
  
      if (wallet < cartTotal) return "Insufficient demo balance";
  
      const order = {
        id: "CHR" + Date.now(),
        items: [...cart],
        total: cartTotal,
        status: "Confirmed",
        date: new Date().toLocaleString()
      };
  
      setWallet(prev => prev - cartTotal);
      setOrders(prev => [order, ...prev]);
      setCart([]);
  
      setTransactions(prev => [{
        id: Date.now(),
        type: "Purchase",
        amount: cartTotal,
        date: new Date().toLocaleString()
      }, ...prev]);
  
      return "SUCCESS";
    };
  
    // REFUND
    const refundOrder = (orderId) => {
      const order = orders.find(item => item.id === orderId);
  
      if (!order || order.status !== "Confirmed") {
        return false;
      }
  
      setWallet(prev => prev + order.total);
  
      setOrders(prev =>
        prev.map(item =>
          item.id === orderId
            ? { ...item, status: "Refunded" }
            : item
        )
      );
  
      setTransactions(prev => [{
        id: Date.now(),
        type: "Refund",
        amount: order.total,
        date: new Date().toLocaleString()
      }, ...prev]);
  
      return true;
    };
  
    return (
      <ShopContext.Provider value={{
        products,
        cart,
        wallet,
        orders,
        transactions,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        addDemoCredits,
        checkout,
        refundOrder
      }}>
        {children}
      </ShopContext.Provider>
    );
  }
  
  export { ShopProvider };
  
  export const useShop = () => useContext(ShopContext);
  