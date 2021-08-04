import "./App.css";
import "normalize.css";
import { Switch, Route, Redirect } from "react-router-dom";
//Components
import LoginForm from "./components/forms/LoginForm";
import { Navbar } from "./components/navigation/Navbar";
import Popup from "./components/popup/Popup";
import { Footer } from "./components/navigation/Footer";
import { MainPage } from "./pages/MainPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ShoppingPage } from "./pages/ShoppingPage";

function App() {
  return (
    <div className="App">
      <Popup open={false} content={<LoginForm />} />
      <Navbar />
      <Switch>
        <Route path="/home">
          <MainPage />
        </Route>
        <Route path="/products/:id">
          <ProductsPage />
        </Route>
        <Route path="/shopping">
          <ShoppingPage />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
