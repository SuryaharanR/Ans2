import React from "react";

const ProfileDetails = () => {
  return (
    <div style={styles.profileSection}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/008/149/271/non_2x/user-icon-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-free-vector.jpg"
        alt="Profile"
        style={styles.profilePicture}
      />
      <div style={styles.profileDetails}>
        <p><strong>Patient ID:</strong> 87 20200727153457</p>
        <p><strong>Phone:</strong> 8022334455</p>
        <p><strong>Email:</strong> meenarabinsachin2@gmail.com</p>
      </div>
    </div>
  );
};

const styles = {
  profileSection: {
    padding: "20px",
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    '@media (min-width: 601px)': {
      flexDirection: "row",
    },
  },
  profilePicture: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginBottom: "20px",
    '@media (min-width: 601px)': {
      marginRight: "20px",
      marginBottom: "0",
    },
  },
  profileDetails: {
    fontSize: "18px",
    textAlign: "center",
    '@media (min-width: 601px)': {
      textAlign: "left",
    },
  },
};

export default ProfileDetails;
