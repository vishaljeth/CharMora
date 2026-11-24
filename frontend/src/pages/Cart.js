
import React from "react";
import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useShop();

  return (
    <div style={styles.page}>

      <div style={styles.hero}>
        <p style={styles.tag}>YOUR SHOPPING BAG</p>
        <h1>My Cart</h1>
        <p>Review your favourite pieces before checkout.</p>
      </div>

      <div style={styles.container}>

        {cart.length === 0 ? (

          <div style={styles.empty}>
            <div style={styles.icon}>♡</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything yet.</p>

            <button
              style={styles.shopButton}
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>
          </div>

        ) : (

          <div style={styles.layout}>

            {/* CART ITEMS */}
            <div style={styles.itemsSection}>

              <h2>Shopping Items ({cart.length})</h2>

              {cart.map((item) => (

                <div key={item.id} style={styles.item}>

                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.image}
                  />

                  <div style={styles.details}>
                    <h3>{item.name}</h3>

                    <p style={styles.price}>
                      ₹{item.price}
                    </p>

                    <div style={styles.quantity}>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      style={styles.remove}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div style={styles.itemTotal}>
                    ₹{item.price * item.quantity}
                  </div>

                </div>

              ))}

              <button
                style={styles.continueButton}
                onClick={() => navigate("/shop")}
              >
                ← Continue Shopping
              </button>

            </div>

            {/* ORDER SUMMARY */}
            <div style={styles.summary}>

              <h2>Order Summary</h2>

              <div style={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>

              <div style={styles.summaryRow}>
                <span>Shipping</span>
                <span style={{ color: "#267a43" }}>Free</span>
              </div>

              <div style={styles.divider}></div>

              <div style={styles.totalRow}>
                <strong>Total</strong>
                <strong>₹{cartTotal}</strong>
              </div>

              <button
                style={styles.checkoutButton}
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

              <p style={styles.note}>
                Demo wallet payment available at checkout.
              </p>

            </div>

          </div>

        )}

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#fffaf7",
    fontFamily: "Arial, sans-serif",
    color: "#38251f",
  },

  hero: {
    textAlign: "center",
    padding: "55px 20px",
    background: "#f5e5dc",
  },

  tag: {
    color: "#9b6552",
    letterSpacing: "4px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  container: {
    maxWidth: "1150px",
    margin: "auto",
    padding: "40px 20px",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 2fr) minmax(260px, 1fr)",
    gap: "30px",
    alignItems: "start",
  },

  itemsSection: {
    minWidth: 0,
  },

  item: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "18px",
    background: "white",
    padding: "20px",
    marginTop: "18px",
    borderRadius: "10px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.05)",
  },

  image: {
    width: "100px",
    height: "110px",
    objectFit: "cover",
    borderRadius: "7px",
  },

  details: {
    flex: "1",
    minWidth: "120px",
  },

  price: {
    color: "#9b6552",
    fontWeight: "bold",
  },

  quantity: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    margin: "12px 0",
  },

  remove: {
    border: "none",
    background: "transparent",
    color: "#b33b3b",
    cursor: "pointer",
    padding: "5px 0",
  },

  itemTotal: {
    fontWeight: "bold",
    fontSize: "17px",
  },

  summary: {
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.05)",
    height: "fit-content",
  },

  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
    color: "#765c52",
  },

  divider: {
    borderTop: "1px solid #eee",
    margin: "20px 0",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "19px",
  },

  checkoutButton: {
    width: "100%",
    padding: "14px",
    marginTop: "25px",
    background: "#8e5b49",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  note: {
    fontSize: "12px",
    color: "#999",
    textAlign: "center",
    marginTop: "15px",
  },

  continueButton: {
    marginTop: "25px",
    background: "transparent",
    border: "none",
    color: "#8e5b49",
    cursor: "pointer",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    padding: "65px 20px",
    background: "white",
    borderRadius: "10px",
  },

  icon: {
    fontSize: "60px",
    color: "#a16c57",
  },

  shopButton: {
    marginTop: "20px",
    padding: "13px 25px",
    background: "#8e5b49",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Cart;
