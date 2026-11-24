
import React from "react";
import { Link } from "react-router-dom";
import Cartitem from "../components/Cartitem";
import { useShop } from "../context/ShopContext";

export default function Cart() {
  const { cart, cartTotal } = useShop();

  return (
    <>
      <style>{`
        .ch-cart { padding:55px 8%; min-height:65vh; }
        .ch-cart h1 { font:40px Georgia,serif; }
        .ch-cart-total { text-align:right; margin-top:30px; }
        .ch-cart-btn {
          display:inline-block; background:#302820;
          color:white; padding:14px 24px;
          text-decoration:none; margin-top:15px;
        }
      `}</style>

      <section className="ch-cart">

        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div style={{textAlign:"center",padding:60}}>
            <h2>Your cart is empty!</h2>
            <Link to="/shop" className="ch-cart-btn">
              START SHOPPING
            </Link>
          </div>
        ) : (
          <>
            {cart.map(item => (
              <Cartitem key={item.id} item={item} />
            ))}

            <div className="ch-cart-total">
              <h2>Total: ₹{cartTotal}</h2>

              <Link to="/checkout" className="ch-cart-btn">
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </>
        )}

      </section>
    </>
  );
}
