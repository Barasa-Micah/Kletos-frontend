import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import CustomerAuth from "./pages/customerauth";
import ProductDetails from "./pages/ProductDetails";
import ShoppingcartPage from "./pages/shoppingcart";
import ProductListPage from "./pages/productlisting";
import FAQPage from "./pages/FAQPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import MainAccount from "./components/accountInfo/mainaccount";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/aboutus";

function App() {
  return (
    <Router>
      <main className="app">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/auth" element={<CustomerAuth />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/shoppingcart" element={<ShoppingcartPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route path="/myaccount" element={<MainAccount />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
