
import React from "react";
import { useShop } from "../context/ShopContext";

export default function Cartitem({ item }) {

  const { removeFromCart, updateQuantity } = useShop();

  return (
    <>
      <style>{`
        .ch-cart-item {
          background: white;
          padding: 20px;
          margin: 15px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          border: 1px solid #eee8df;
        }

        .ch-quantity {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ch-quantity button {
          width: 30px;
          height: 30px;
          cursor: pointer;
          border: 1px solid #ddd;
          background: #faf8f4;
        }

        .ch-remove {
          background: #f4e7e2;
          color: #9b4434;
          padding: 10px;
          border: none;
          cursor: pointer;
        }
      `}</style>

      <div className="ch-cart-item">

        <div>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>

        <div className="ch-quantity">

          <button onClick={() =>
            updateQuantity(item.id, item.quantity - 1)
          }>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() =>
            updateQuantity(item.id, item.quantity + 1)
          }>
            +
          </button>

        </div>

        <strong>
          ₹{item.price * item.quantity}
        </strong>

        <button
          className="ch-remove"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>

      </div>
    </>
  );
}
