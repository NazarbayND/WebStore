import "./App.css";
import LoginForm from "./components/forms/LoginForm";
import { Navbar } from "./components/navigation/Navbar";
import Popup from "./components/popup/Popup";
import "normalize.css";
import { CategoryCard } from "./components/cards/CategoryCard";

function App() {
  return (
    <div className="App">
      {/* <Popup open={true} content={<LoginForm />} /> */}
      <Navbar />
      <CategoryCard />
    </div>
  );
}

export default App;
