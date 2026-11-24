
import React from "react";
import { useShop } from "../context/ShopContext";

export default function ProductCard({ product }) {

  const { addToCart } = useShop();

  return (
    <>
      <style>{`
        .ch-product {
          background: white;
          border: 1px solid #eee8df;
          transition: 0.3s;
          overflow: hidden;
        }

        .ch-product:hover {
          transform: translateY(-5px);
        }

        .ch-product img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }

        .ch-product-info {
          padding: 20px;
          text-align: center;
        }

        .ch-product-info span {
          color: #a17b45;
          font-size: 12px;
        }

        .ch-product-info h3 {
          font-family: Georgia, serif;
          margin: 10px 0;
        }

        .ch-product-info button {
          width: 100%;
          padding: 12px;
          background: #302820;
          color: white;
          border: none;
          margin-top: 15px;
          cursor: pointer;
        }

        .ch-product-info button:hover {
          background: #a17b45;
        }
      `}</style>

      <div className="ch-product">

        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/500x500?text=Charmora";
          }}
        />

        <div className="ch-product-info">

          <span>{product.category}</span>

          <h3>{product.name}</h3>

          <strong>₹{product.price}</strong>

          <button onClick={() => addToCart(product)}>
            ADD TO CART
          </button>

        </div>

      </div>
    </>
  );
}
