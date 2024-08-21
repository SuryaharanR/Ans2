import React from "react";

const MedicalDetails = () => {
  return (
    <div style={styles.medicalDetails}>
      <div style={styles.contactInfo}>
        <p><strong>Affected Side:</strong> Bilateral</p>
        <p><strong>Condition:</strong> Ortho</p>
        <p><strong>Specialty:</strong> Osteoarthritis</p>
      </div>
      <div style={styles.medicalInfo}>
        <p className="label"><strong>Medical History:</strong></p>
        <p>Hypertension, DM, Hypothyroidism</p>
      </div>
    </div>
  );
};

const styles = {
  medicalDetails: {
    padding: "20px",
  },
  contactInfo: {
    marginBottom: "20px",
  },
  medicalInfo: {
    marginBottom: "20px",
  },
};

export default MedicalDetails;
