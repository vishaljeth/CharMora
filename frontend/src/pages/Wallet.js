
import React, { useState } from "react";
import { useShop } from "../context/ShopContext";

export default function Wallet() {
  const { wallet, transactions, addDemoCredits } = useShop();

  const [amount, setAmount] = useState("500");

  const handleAdd = () => {
    const success = addDemoCredits(Number(amount));

    alert(
      success
        ? "Demo credits added successfully!"
        : "Invalid amount!"
    );
  };

  return (
    <>
      <style>{`
        .ch-wallet { padding:50px 8%; min-height:70vh; }
        .ch-wallet-card {
          background:#302820; color:white;
          padding:35px; max-width:550px;
          margin:25px 0;
        }
        .ch-wallet-card h1 {
          font:45px Georgia,serif; margin:15px 0;
        }
        .ch-wallet select {
          padding:13px; border:1px solid #ddd;
          margin:15px 10px 15px 0;
        }
        .ch-wallet button {
          padding:14px 20px; background:#a17b45;
          color:white; border:0; cursor:pointer;
        }
        .ch-transaction {
          padding:18px; background:white;
          margin:10px 0; border:1px solid #eee;
          display:flex; justify-content:space-between;
          gap:10px; flex-wrap:wrap;
        }
      `}</style>

      <section className="ch-wallet">

        <h1>My Demo Wallet</h1>

        <div className="ch-wallet-card">
          <span>AVAILABLE DEMO BALANCE</span>
          <h1>₹{wallet.toLocaleString("en-IN")}</h1>
          <small>Virtual credits only</small>
        </div>

        <h2>Add Demo Credits</h2>

        <select
          value={amount}
          onChange={e => setAmount(e.target.value)}
        >
          <option value="100">₹100</option>
          <option value="500">₹500</option>
          <option value="1000">₹1000</option>
          <option value="2000">₹2000</option>
        </select>

        <button onClick={handleAdd}>
          ADD CREDITS
        </button>

        <h2 style={{marginTop:40}}>Transaction History</h2>

        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          transactions.map(item => (
            <div className="ch-transaction" key={item.id}>
              <span>
                {item.type}
                <br />
                <small>{item.date}</small>
              </span>

              <strong>₹{item.amount}</strong>
            </div>
          ))
        )}

      </section>
    </>
  );
}
