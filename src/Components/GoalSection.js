import React from "react";

const GoalSection = () => {
  return (
    <div style={styles.goalSection}>
      <div style={styles.progress}>40%</div>
      <div style={styles.gauge}></div>
      <p>EMG | ROM</p>
    </div>
  );
};

const styles = {
  goalSection: {
    backgroundColor: "#012E57",
    color: "#FFFFFF",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px 0",
    textAlign: "center",
    '@media (max-width: 600px)': {
      padding: "10px",
      fontSize: "14px",
    },
  },
  progress: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  gauge: {
    height: "150px",
    width: "300px",
    margin: "0 auto",
    background: "conic-gradient(#37DD00 0% 40%, #B6B6B6 40% 100%)",
    borderRadius: "100px 100px 0 0",
    '@media (max-width: 600px)': {
      width: "200px",
      height: "100px",
    },
  },
};

export default GoalSection;
