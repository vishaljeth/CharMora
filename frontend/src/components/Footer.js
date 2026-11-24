
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <style>{`
        .ch-footer {
          background: #302820;
          color: white;
          padding: 45px 8% 20px;
          text-align: center;
        }

        .ch-footer h2 {
          font-family: Georgia, serif;
          letter-spacing: 3px;
        }

        .ch-footer p {
          color: #c9bba8;
          margin: 12px 0;
          font-size: 13px;
        }

        .ch-footer-links {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
          margin: 25px 0;
        }

        .ch-footer-links a {
          color: white;
          text-decoration: none;
          font-size: 13px;
        }

        .ch-footer small {
          color: #c9bba8;
        }
      `}</style>

      <footer className="ch-footer">

        <h2>CHARMORA.</h2>

        <p>A Little Charm, A Lot of Style.</p>

        <div className="ch-footer-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/wallet">Demo Wallet</Link>
        </div>

        <small>
          © 2026 Charmora. Academic E-Business Project.
        </small>

        <p>All transactions are simulated.</p>

      </footer>
    </>
  );
}
