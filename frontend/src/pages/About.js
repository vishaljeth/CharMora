
import React from "react";

function About() {
  return (
    <div style={styles.page}>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <p style={styles.tag}>WELCOME TO CHARMORA</p>

        <h1 style={styles.heading}>
          Jewellery That Defines Your Charm
        </h1>

        <p style={styles.subtitle}>
          Discover elegant and affordable jewellery designed
          to make every moment beautiful.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section style={styles.about}>
        <div style={styles.imageBox}>
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"
            alt="Elegant jewellery collection"
            style={styles.image}
          />
        </div>

        <div style={styles.content}>
          <p style={styles.tag}>OUR STORY</p>

          <h2 style={styles.title}>About Charmora</h2>

          <p style={styles.text}>
            Charmora is an online jewellery and accessories store
            created for people who love elegance, beauty and style.
          </p>

          <p style={styles.text}>
            Our goal is to make beautiful jewellery accessible
            and affordable. We offer carefully selected designs
            that complement everyday outfits as well as special occasions.
          </p>

          <p style={styles.text}>
            From stylish earrings to beautiful necklaces and bracelets,
            Charmora brings charm to your everyday lifestyle.
          </p>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section style={styles.missionSection}>
        <div style={styles.infoCard}>
          <h2>Our Mission</h2>
          <p>
            To provide stylish, affordable and quality jewellery
            with a simple and convenient online shopping experience.
          </p>
        </div>

        <div style={styles.infoCard}>
          <h2>Our Vision</h2>
          <p>
            To build a trusted jewellery brand where every customer
            can discover designs that express their personality.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={styles.features}>
        <h2 style={styles.title}>Why Choose Charmora?</h2>

        <div style={styles.featureGrid}>
          <div style={styles.feature}>
            <span style={styles.icon}>✦</span>
            <h3>Elegant Designs</h3>
            <p>Beautiful jewellery for everyday and special occasions.</p>
          </div>

          <div style={styles.feature}>
            <span style={styles.icon}>♡</span>
            <h3>Affordable Prices</h3>
            <p>Fashionable accessories at budget-friendly prices.</p>
          </div>

          <div style={styles.feature}>
            <span style={styles.icon}>✓</span>
            <h3>Easy Shopping</h3>
            <p>A simple and convenient online shopping experience.</p>
          </div>

          <div style={styles.feature}>
            <span style={styles.icon}>✧</span>
            <h3>Special Collection</h3>
            <p>Handpicked styles to add charm to your look.</p>
          </div>
        </div>
      </section>

      {/* FOOTER BANNER */}
      <section style={styles.banner}>
        <h2>Every Detail Tells a Story</h2>
        <p>Make your everyday moments shine with Charmora.</p>
      </section>

    </div>
  );
}

const styles = {
  page: {
    background: "#fffaf7",
    fontFamily: "Arial, sans-serif",
    color: "#38251f",
  },

  hero: {
    textAlign: "center",
    padding: "75px 20px",
    background: "#f5e5dc",
  },

  tag: {
    color: "#9b6552",
    letterSpacing: "4px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  heading: {
    fontSize: "clamp(30px, 5vw, 48px)",
    margin: "18px auto",
    maxWidth: "750px",
  },

  subtitle: {
    maxWidth: "600px",
    margin: "auto",
    lineHeight: "1.7",
    color: "#765c52",
  },

  about: {
    maxWidth: "1150px",
    margin: "auto",
    padding: "65px 20px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "45px",
  },

  imageBox: {
    flex: "1",
    minWidth: "260px",
  },

  image: {
    width: "100%",
    height: "370px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  content: {
    flex: "1",
    minWidth: "260px",
  },

  title: {
    fontSize: "30px",
    margin: "15px 0",
  },

  text: {
    color: "#765c52",
    lineHeight: "1.8",
    fontSize: "15px",
  },

  missionSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
    padding: "45px 20px",
    background: "#f5e5dc",
  },

  infoCard: {
    maxWidth: "450px",
    width: "100%",
    margin: "auto",
    padding: "30px",
    background: "white",
    borderRadius: "10px",
    textAlign: "center",
    boxSizing: "border-box",
  },

  features: {
    padding: "65px 20px",
    textAlign: "center",
  },

  featureGrid: {
    maxWidth: "1100px",
    margin: "35px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
  },

  feature: {
    background: "white",
    padding: "28px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },

  icon: {
    fontSize: "35px",
    color: "#a16c57",
  },

  banner: {
    textAlign: "center",
    padding:    "55px 20px",
    background: "#8e5b49",
    color: "white",
  },
};

export default About;
