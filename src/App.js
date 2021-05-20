import "./App.css";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// PAGES
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div id="wrap">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
