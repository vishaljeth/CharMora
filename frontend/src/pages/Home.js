import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Golden Bloom Earrings",
      category: "Earrings",
      price: 199,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600"
    },
    {
      id: 2,
      name: "Pearl Charm Bracelet",
      category: "Bracelets",
      price: 249,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600"
    },
    {
      id: 3,
      name: "Moonlight Necklace",
      category: "Necklaces",
      price: 399,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600"
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
        }

        .charmora-home {
          font-family: 'DM Sans', sans-serif;
          color: #302820;
          background: #fffdf9;
          overflow: hidden;
        }

        .charmora-home a {
          text-decoration: none;
        }

        /* ANNOUNCEMENT BAR */

        .announcement {
          background: #302820;
          color: white;
          text-align: center;
          padding: 10px;
          font-size: 12px;
          letter-spacing: 1.5px;
        }

        /* HERO */

        .charmora-hero {
          min-height: 580px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #f3ede4;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 70px 12%;
        }

        .hero-label {
          color: #a17b45;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 700;
        }

        .hero-content h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 5vw, 68px);
          line-height: 1.15;
          font-weight: 500;
          margin: 25px 0;
          color: #302820;
        }

        .hero-content h1 span {
          color: #a17b45;
          font-style: italic;
        }

        .hero-content p {
          color: #766c60;
          font-size: 15px;
          line-height: 1.9;
          max-width: 430px;
          margin-bottom: 32px;
        }

        .hero-btn {
          display: inline-block;
          width: fit-content;
          background: #302820;
          color: white;
          padding: 16px 30px;
          font-size: 12px;
          letter-spacing: 1.5px;
          transition: 0.3s;
        }

        .hero-btn:hover {
          background: #a17b45;
        }

        .hero-image {
          min-height: 580px;
          background-image: url("https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200");
          background-position: center;
          background-size: cover;
        }

        /* FEATURES */

        .charmora-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 35px 8%;
          border-bottom: 1px solid #eee9e1;
          background: white;
          gap: 20px;
        }

        .feature {
          text-align: center;
        }

        .feature h4 {
          font-size: 13px;
          margin-bottom: 7px;
          letter-spacing: 1px;
        }

        .feature p {
          font-size: 12px;
          color: #8a8177;
        }

        /* COMMON SECTION */

        .charmora-section {
          padding: 90px 8%;
        }

        .charmora-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .charmora-heading span {
          color: #a17b45;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .charmora-heading h2 {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 500;
          margin: 14px 0;
        }

        .charmora-heading p {
          color: #81766a;
          font-size: 14px;
        }

        /* PRODUCTS */

        .charmora-products {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .charmora-product {
          background: white;
          border: 1px solid #eee9e1;
          transition: 0.3s;
        }

        .charmora-product:hover {
          transform: translateY(-7px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.07);
        }

        .product-image {
          position: relative;
          overflow: hidden;
          background: #f1ece4;
        }

        .product-image img {
          width: 100%;
          height: 310px;
          object-fit: cover;
          display: block;
          transition: 0.5s;
        }

        .charmora-product:hover img {
          transform: scale(1.06);
        }

        .product-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background: white;
          color: #a17b45;
          font-size: 10px;
          padding: 8px 12px;
          letter-spacing: 1px;
        }

        .product-details {
          padding: 22px;
          text-align: center;
        }

        .product-details p {
          color: #a17b45;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .product-details h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 500;
          margin: 10px 0;
        }

        .product-price {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .product-btn {
          display: block;
          padding: 13px;
          background: #302820;
          color: white;
          font-size: 11px;
          letter-spacing: 1px;
          transition: 0.3s;
        }

        .product-btn:hover {
          background: #a17b45;
        }

        .view-all {
          text-align: center;
          margin-top: 45px;
        }

        .view-all a {
          color: #a17b45;
          border-bottom: 1px solid #a17b45;
          padding-bottom: 7px;
          font-size: 13px;
          font-weight: 700;
        }

        /* CATEGORY */

        .charmora-category {
          background: #f3ede4;
          padding: 85px 8%;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .category-card {
          position: relative;
          height: 350px;
          overflow: hidden;
        }

        .category-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s;
        }

        .category-card:hover img {
          transform: scale(1.07);
        }

        .category-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.65));
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 25px;
          color: white;
        }

        .category-overlay h3 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 500;
        }

        .category-overlay p {
          font-size: 12px;
          margin-top: 7px;
        }

        /* ABOUT */

        .charmora-story {
          padding: 90px 12%;
          text-align: center;
          background: white;
        }

        .charmora-story h2 {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 500;
          margin: 20px 0;
        }

        .charmora-story p {
          max-width: 680px;
          margin: auto;
          color: #81766a;
          font-size: 14px;
          line-height: 2;
        }

        .story-btn {
          display: inline-block;
          margin-top: 30px;
          color: #a17b45;
          border-bottom: 1px solid #a17b45;
          padding-bottom: 7px;
          font-size: 12px;
          font-weight: 700;
        }

        /* NEWSLETTER */

        .charmora-newsletter {
          background: #eee5d8;
          padding: 75px 20px;
          text-align: center;
        }

        .charmora-newsletter h2 {
          font-family: 'Playfair Display', serif;
          font-size: 35px;
          font-weight: 500;
          margin: 12px 0;
        }

        .charmora-newsletter p {
          color: #766c60;
          font-size: 13px;
          margin-bottom: 25px;
        }

        .newsletter-form {
          display: flex;
          max-width: 460px;
          margin: auto;
        }

        .newsletter-form input {
          flex: 1;
          min-width: 0;
          padding: 15px;
          border: 1px solid #ddd0bd;
          outline: none;
        }

        .newsletter-form button {
          border: none;
          padding: 15px 22px;
          background: #302820;
          color: white;
          cursor: pointer;
        }

        /* FOOTER */

        .charmora-footer {
          background: #302820;
          color: white;
          padding: 60px 8% 25px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 45px;
        }

        .footer-brand h2 {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          letter-spacing: 3px;
        }

        .footer-brand p {
          color: #c4b8a8;
          font-size: 13px;
          line-height: 1.8;
          margin-top: 15px;
          max-width: 320px;
        }

        .footer-column h4 {
          margin-bottom: 20px;
          color: #c49c62;
          font-size: 13px;
          letter-spacing: 1px;
        }

        .footer-column a {
          display: block;
          color: #d0c6ba;
          font-size: 13px;
          margin-bottom: 13px;
        }

        .footer-bottom {
          border-top: 1px solid #51473d;
          padding-top: 22px;
          text-align: center;
          color: #b7aa9b;
          font-size: 11px;
        }

        /* RESPONSIVE */

        @media(max-width: 900px) {
          .hero-content {
            padding: 50px 8%;
          }

          .product-image img {
            height: 250px;
          }
        }

        @media(max-width: 650px) {
          .announcement {
            font-size: 10px;
          }

          .charmora-hero {
            grid-template-columns: 1fr;
          }

          .hero-content {
            padding: 65px 8%;
          }

          .hero-content h1 {
            font-size: 46px;
          }

          .hero-image {
            min-height: 350px;
          }

          .charmora-features {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .charmora-section {
            padding: 65px 6%;
          }

          .charmora-heading h2 {
            font-size: 34px;
          }

          .charmora-products {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .product-image img {
            height: 320px;
          }

          .charmora-category {
            padding: 65px 6%;
          }

          .category-grid {
            grid-template-columns: 1fr;
          }

          .category-card {
            height: 330px;
          }

          .charmora-story {
            padding: 65px 8%;
          }

          .charmora-story h2 {
            font-size: 34px;
          }

          .charmora-newsletter h2 {
            font-size: 28px;
          }

          .newsletter-form button {
            padding: 12px;
            font-size: 11px;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media(max-width: 380px) {
          .hero-content h1 {
            font-size: 38px;
          }

          .newsletter-form {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      <div className="charmora-home">
        {/* ANNOUNCEMENT */}
        <div className="announcement">
          ✦ FREE SHIPPING ON ORDERS ABOVE ₹499 ✦
        </div>

        {/* HERO SECTION */}
        <section className="charmora-hero">
          <div className="hero-content">
            <span className="hero-label">
              THE ART OF EVERYDAY ELEGANCE
            </span>

            <h1>
              Discover Your
              <br />
              <span>Unique Charm.</span>
            </h1>

            <p>
              Beautifully crafted accessories that celebrate
              your individuality. Find your perfect piece
              and make every moment special.
            </p>

            <Link to="/shop" className="hero-btn">
              EXPLORE COLLECTION →
            </Link>
          </div>

          <div className="hero-image"></div>
        </section>

        {/* FEATURES */}
        <section className="charmora-features">
          <div className="feature">
            <h4>✦ HANDPICKED DESIGNS</h4>
            <p>Unique styles for every personality</p>
          </div>

          <div className="feature">
            <h4>✦ AFFORDABLE LUXURY</h4>
            <p>Beautiful accessories at lovely prices</p>
          </div>

          <div className="feature">
            <h4>✦ CAREFULLY PACKED</h4>
            <p>Every order packed with love</p>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="charmora-section">
          <div className="charmora-heading">
            <span>OUR COLLECTION</span>
            <h2>Featured Pieces</h2>
            <p>Little details that make a big difference.</p>
          </div>

          <div className="charmora-products">
            {products.map((product) => (
              <div className="charmora-product" key={product.id}>
                <div className="product-image">
                  <span className="product-tag">BESTSELLER</span>
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="product-details">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                  <div className="product-price">
                    ₹{product.price}
                  </div>
                  <Link to="/shop" className="product-btn">
                    EXPLORE PRODUCT →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all">
            <Link to="/shop">
              VIEW ALL COLLECTIONS →
            </Link>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="charmora-category">
          <div className="charmora-heading">
            <span>FIND YOUR STYLE</span>
            <h2>Shop By Category</h2>
            <p>Discover something special for yourself.</p>
          </div>

          <div className="category-grid">
            <div className="category-card">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700"
                alt="Earrings"
              />
              <div className="category-overlay">
                <h3>Earrings</h3>
                <p>Elegant everyday styles</p>
              </div>
            </div>

            <div className="category-card">
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700"
                alt="Bracelets"
              />
              <div className="category-overlay">
                <h3>Bracelets</h3>
                <p>Beautiful little details</p>
              </div>
            </div>

            <div className="category-card">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=700"
                alt="Necklaces"
              />
              <div className="category-overlay">
                <h3>Necklaces</h3>
                <p>Made to make you shine</p>
              </div>
            </div>
          </div>
        </section>

        {/* BRAND STORY */}
        <section className="charmora-story">
          <span className="hero-label">
            MORE THAN JUST ACCESSORIES
          </span>

          <h2>
            Your Style.
            <br />
            Your Story. Your Charm.
          </h2>

          <p>
            At Charmora, we believe that the smallest details
            can create the most beautiful impressions. Our
            collection brings together affordable designs and
            everyday elegance to help you express your unique style.
          </p>

          <Link to="/about" className="story-btn">
            DISCOVER OUR STORY →
          </Link>
        </section>

        {/* NEWSLETTER */}
        <section className="charmora-newsletter">
          <span className="hero-label">
            STAY CONNECTED
          </span>

          <h2>A Little Love in Your Inbox</h2>

          <p>
            Get updates about new collections and special offers.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for joining Charmora!");
              e.target.reset();
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />

            <button type="submit">
              SUBSCRIBE
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="charmora-footer">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2>CHARMORA.</h2>
              <p>
                A Little Charm, A Lot of Style.
                Discover beautiful accessories made for
                your everyday moments.
              </p>
            </div>

            <div className="footer-column">
              <h4>QUICK LINKS</h4>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About Us</Link>
              <Link to="/orders">My Orders</Link>
            </div>

            <div className="footer-column">
              <h4>CUSTOMER CARE</h4>
              <Link to="/contact">Contact Us</Link>
              <Link to="/refund">Refund Policy</Link>
              <Link to="/shipping">Shipping Policy</Link>
              <Link to="/wallet">Demo Wallet</Link>
            </div>
          </div>

          <div className="footer-bottom">
            © 2026 CHARMORA. All Rights Reserved.
            <br />
            Academic E-Business Project | Demo Store
          </div>
        </footer>
      </div>
    </>
  );
}