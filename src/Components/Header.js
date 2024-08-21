import React from "react";

const Header = () => {
  return (
    <div style={styles.header}>
      <button style={styles.backButton}>←</button>
      <h2>View Patient</h2>
      <div style={styles.profileSummary}>
        <div style={styles.name}>S. Meena, F/23</div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#2C2B2B",
    color: "#FFFFFF",
    '@media (max-width: 600px)': {
      flexDirection: "column",
      alignItems: "flex-start",
      textAlign: "left",
    },
  },
  backButton: {
    fontSize: "20px",
    backgroundColor: "transparent",
    border: "none",
    color: "#FFFFFF",
    cursor: "pointer",
  },
  profileSummary: {
    textAlign: "right",
  },
  name: {
    fontSize: "18px",
  },
};

export default Header;
