import styles from "./App.module.css";
import AppRoutes from "./Routes";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={styles.body}>
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
