import "./App.css";
import LoginForm from "./components/forms/LoginForm";
import { Navbar } from "./components/navigation/Navbar";
import Popup from "./components/popup/Popup";
import "normalize.css";

import { Footer } from "./components/navigation/Footer";

import { MainPage } from "./pages/MainPage";
import { ItemsPage } from "./pages/ItemsPage";
import { ShoppingPage } from "./pages/ShoppingPage";
import { InfoPopup } from "./components/popup/InfoPopup";
import { ShoppingPopup } from "./components/popup/ShoppingPopup";
import { UserPopup } from "./components/popup/UserPopup";

function App() {
  return (
    <div className="App">
      <Popup open={false} content={<LoginForm />} />
      <InfoPopup />
      <ShoppingPopup />
      <UserPopup />
      <Navbar />
      <MainPage />
      <ItemsPage />
      <ShoppingPage />
      <Footer />
    </div>
  );
}

export default App;
