
import React from "react";
import { useShop } from "../context/ShopContext";

export default function Admin() {
  const {
    products,
    orders,
    wallet,
    transactions
  } = useShop();

  const totalSales = orders
    .filter(order => order.status === "Confirmed")
    .reduce((sum, order) => sum + order.total, 0);

  const stats = [
    {
      title: "Total Products",
      value: products.length
    },
    {
      title: "Total Orders",
      value: orders.length
    },
    {
      title: "Demo Sales",
      value: `₹${totalSales}`
    },
    {
      title: "Demo Wallet",
      value: `₹${wallet}`
    }
  ];

  return (
    <>
      <style>{`
        .ch-admin {
          padding:55px 8%;
          min-height:70vh;
        }
        .ch-admin h1 {
          font:40px Georgia,serif;
        }
        .ch-admin-grid {
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:20px;
          margin:35px 0;
        }
        .ch-admin-stat {
          padding:25px;
          background:#f1e9dc;
          border:1px solid #e5d9c7;
        }
        .ch-admin-stat h2 {
          font-size:28px;
          margin-top:15px;
          color:#a17b45;
        }
        .ch-admin-order {
          padding:18px;
          background:white;
          border:1px solid #eee;
          margin:12px 0;
        }
        @media(max-width:800px) {
          .ch-admin-grid {
            grid-template-columns:repeat(2,1fr);
          }
        }
        @media(max-width:450px) {
          .ch-admin-grid {
            grid-template-columns:1fr;
          }
        }
      `}</style>

      <section className="ch-admin">

        <h1>Admin Dashboard</h1>

        <p>Charmora Business Overview</p>

        <div className="ch-admin-grid">

          {stats.map((item, index) => (
            <div className="ch-admin-stat" key={index}>
              <span>{item.title}</span>
              <h2>{item.value}</h2>
            </div>
          ))}

        </div>

        <h2>Order Management</h2>

        {orders.length === 0 ? (
          <p style={{marginTop:20}}>No orders available.</p>
        ) : (
          orders.map(order => (
            <div className="ch-admin-order" key={order.id}>
              <strong>{order.id}</strong>
              <p>Total: ₹{order.total}</p>
              <p>Status: {order.status}</p>
              <small>{order.date}</small>
            </div>
          ))
        )}

        <h2 style={{marginTop:35}}>Transactions</h2>

        <p>Total transactions: {transactions.length}</p>

      </section>
    </>
  );
}
