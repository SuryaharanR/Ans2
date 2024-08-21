import Header from './Components/Header';
import ProfileDetails from './Components/ProfileDetails';
import GoalSection from './Components/GoalSection';
import MedicalDetails from './Components/MedicalDetails';


function App() {
  return (
    <div style={styles.app}>
      <Header />
      <ProfileDetails />
      <GoalSection />
      <MedicalDetails />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
};

export default App;
