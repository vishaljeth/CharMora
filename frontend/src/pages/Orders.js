
import React from "react";
import { useShop } from "../context/ShopContext";

function Orders() {
  const { orders, refundOrder } = useShop();

  const handleRefund = (orderId) => {
    const confirmRefund = window.confirm(
      "Are you sure you want to refund this order?"
    );

    if (confirmRefund) {
      const result = refundOrder(orderId);

      if (result) {
        alert("Demo refund successful!");
      } else {
        alert("Refund could not be processed.");
      }
    }
  };

  return (
    <div style={styles.page}>

      <div style={styles.hero}>
        <p style={styles.tag}>CHARMORA ACCOUNT</p>
        <h1>My Orders</h1>
        <p>Track and manage your shopping orders.</p>
      </div>

      <div style={styles.container}>

        <div style={styles.heading}>
          <h2>Order History</h2>
          <span>{orders.length} Orders</span>
        </div>

        {orders.length === 0 ? (
          <div style={styles.empty}>
            <div style={styles.emptyIcon}>♡</div>
            <h2>No Orders Yet</h2>
            <p>
              Your orders will appear here after you complete
              a purchase.
            </p>
          </div>
        ) : (

          <div style={styles.orderList}>

            {orders.map((order) => (

              <div key={order.id} style={styles.card}>

                <div style={styles.orderHeader}>
                  <div>
                    <p style={styles.label}>ORDER ID</p>
                    <h3>{order.id}</h3>
                  </div>

                  <span
                    style={{
                      ...styles.status,
                      background:
                        order.status === "Refunded"
                          ? "#fce4e4"
                          : "#e1f4e7",
                      color:
                        order.status === "Refunded"
                          ? "#b33b3b"
                          : "#267a43",
                    }}
                  >
                    {order.status}
                  </span>
                </div>

                <div style={styles.orderInfo}>
                  <p>
                    <strong>Order Date:</strong> {order.date}
                  </p>

                  <p>
                    <strong>Total Amount:</strong> ₹{order.total}
                  </p>
                </div>

                <div style={styles.productSection}>
                  <h4>Ordered Products</h4>

                  {order.items.map((item, index) => (

                    <div
                      key={`${item.id}-${index}`}
                      style={styles.product}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={styles.productImage}
                      />

                      <div style={styles.productDetails}>
                        <h4>{item.name}</h4>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ₹{item.price}</p>
                      </div>

                      <strong>
                        ₹{item.price * item.quantity}
                      </strong>
                    </div>

                  ))}
                </div>

                {order.status === "Confirmed" && (
                  <button
                    onClick={() => handleRefund(order.id)}
                    style={styles.refundButton}
                  >
                    Request Demo Refund
                  </button>
                )}

                {order.status === "Refunded" && (
                  <p style={styles.refundedText}>
                    Demo refund has been processed.
                  </p>
                )}

              </div>

            ))}

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
    maxWidth: "1000px",
    margin: "auto",
    padding: "35px 20px",
  },

  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "25px",
  },

  orderList: {
    display: "grid",
    gap: "25px",
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
  },

  orderHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
    borderBottom: "1px solid #eee",
    paddingBottom: "15px",
  },

  label: {
    color: "#9b8175",
    fontSize: "11px",
    letterSpacing: "2px",
  },

  status: {
    padding: "8px 15px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  orderInfo: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
    color: "#765c52",
    fontSize: "14px",
    margin: "15px 0",
  },

  productSection: {
    borderTop: "1px solid #eee",
    paddingTop: "15px",
  },

  product: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flexWrap: "wrap",
    padding: "12px 0",
    borderBottom: "1px solid #f3eeee",
  },

  productImage: {
    width: "75px",
    height: "75px",
    objectFit: "cover",
    borderRadius: "7px",
  },

  productDetails: {
    flex: "1",
    minWidth: "120px",
  },

  refundButton: {
    marginTop: "20px",
    padding: "12px 20px",
    background: "#8e5b49",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  refundedText: {
    marginTop: "20px",
    color: "#267a43",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    background: "white",
    padding: "55px 20px",
    borderRadius: "10px",
  },

  emptyIcon: {
    fontSize: "55px",
    color: "#a16c57",
  },
};

export default Orders;
