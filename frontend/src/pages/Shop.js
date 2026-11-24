
import React, { useState } from "react";
import { useShop } from "../context/ShopContext";

function Shop() {
  const { products, addToCart } = useShop();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Earrings", "Bracelets", "Necklaces"];

  const filteredProducts = (products || []).filter((product) => {
    const matchesSearch = product.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <p style={styles.smallTitle}>CHARMORA COLLECTION</p>
        <h1 style={styles.heading}>Find Your Perfect Charm</h1>
        <p style={styles.subtitle}>
          Discover beautiful jewellery made to make every moment special.
        </p>
      </div>

      <div style={styles.container}>
        <div style={styles.toolbar}>
          <input
            type="text"
            placeholder="Search jewellery..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.search}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.select}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <h2 style={styles.sectionTitle}>Our Collection</h2>

        {filteredProducts.length === 0 ? (
          <p style={styles.empty}>No products found.</p>
        ) : (
          <div style={styles.grid}>
            {filteredProducts.map((product) => (
              <div key={product.id} style={styles.card}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.image}
                />

                <div style={styles.details}>
                  <h3 style={styles.productName}>{product.name}</h3>

                  <p style={styles.category}>
                    {product.category}
                  </p>

                  <p style={styles.price}>
                    ₹{product.price}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    style={styles.button}
                  >
                    Add to Cart
                  </button>
                </div>
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
    background: "#fffaf7",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },

  hero: {
    textAlign: "center",
    padding: "65px 20px",
    background: "#f5e5dc",
  },

  smallTitle: {
    letterSpacing: "4px",
    color: "#9b6552",
    fontSize: "12px",
    fontWeight: "bold",
  },

  heading: {
    fontSize: "clamp(28px, 5vw, 45px)",
    color: "#38251f",
    margin: "15px 0",
  },

  subtitle: {
    color: "#765c52",
    fontSize: "15px",
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "35px 20px",
  },

  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "35px",
  },

  search: {
    flex: "1",
    minWidth: "200px",
    padding: "13px",
    border: "1px solid #d9c2b8",
    borderRadius: "6px",
    fontSize: "14px",
  },

  select: {
    padding: "13px",
    border: "1px solid #d9c2b8",
    borderRadius: "6px",
    background: "white",
  },

  sectionTitle: {
    color: "#38251f",
    marginBottom: "25px",
    fontSize: "26px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "25px",
  },

  card: {
    background: "white",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.07)",
  },

  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    display: "block",
  },

  details: {
    padding: "18px",
  },

  productName: {
    color: "#38251f",
    margin: "0 0 8px",
  },

  category: {
    color: "#9b8175",
    fontSize: "13px",
  },

  price: {
    color: "#9b6552",
    fontSize: "20px",
    fontWeight: "bold",
  },

  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    background: "#8e5b49",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    padding: "40px",
    color: "#765c52",
  },
};

export default Shop;
