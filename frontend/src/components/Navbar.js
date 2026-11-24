
import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const { cart } = useShop();

  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .ch-navbar {
          width: 100%;
          background: #fffdf9;
          padding: 18px 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          border-bottom: 1px solid #eee5d9;
          box-shadow: 0 2px 12px rgba(0,0,0,0.025);
          flex-wrap: wrap;
        }

        /* LOGO */
        .ch-logo {
          font-family: Georgia, serif;
          font-size: 29px;
          letter-spacing: 4px;
          font-weight: bold;
          color: #302820;
          text-decoration: none !important;
          white-space: nowrap;
          transition: 0.3s ease;
        }

        .ch-logo span {
          color: #b18a51;
        }

        .ch-logo:hover,
        .ch-logo:visited,
        .ch-logo:active {
          color: #302820;
          text-decoration: none !important;
        }

        /* NAV LINKS */
        .ch-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          flex-wrap: wrap;
        }

        .ch-links a,
        .ch-actions a {
          color: #302820;
          text-decoration: none !important;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .ch-links a:hover,
        .ch-actions a:hover {
          color: #b18a51;
        }

        /* RIGHT ACTIONS */
        .ch-actions {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .ch-actions a:last-child {
          background: #302820;
          color: #fffdf9;
          padding: 10px 17px;
          border-radius: 3px;
          transition: 0.3s ease;
        }

        .ch-actions a:last-child:hover {
          background: #b18a51;
          color: white;
        }

        /* MOBILE */
        @media(max-width: 768px) {
          .ch-navbar {
            flex-direction: column;
            gap: 17px;
            padding: 18px 12px;
          }

          .ch-logo {
            font-size: 26px;
          }

          .ch-links {
            gap: 18px;
          }

          .ch-actions {
            gap: 25px;
          }
        }

        @media(max-width: 400px) {
          .ch-links {
            gap: 13px;
          }

          .ch-links a,
          .ch-actions a {
            font-size: 12px;
          }
        }
      `}</style>

      <header className="ch-navbar">

        <Link to="/" className="ch-logo">
          CHARMORA<span>.</span>
        </Link>

        <nav className="ch-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/admin">Admin</Link>
        </nav>

        <div className="ch-actions">
          <Link to="/wallet">Wallet</Link>
          <Link to="/cart">Cart ({count})</Link>
        </div>

      </header>
    </>
  );
}

