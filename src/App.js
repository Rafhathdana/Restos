import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUpPage";
import Otp from "./pages/Otp";
import Verified from "./pages/AccountCreated";
import Dashboard from "./pages/Dashboard";
import EmptyProduct from "./pages/ProductEmpty";
import AddProduct from "./pages/AddProduct";
import MainDashboard from "./pages/MainDashboard";
import OnBoarding from "./pages/delivery/OnBoarding";
import Location from "./pages/delivery/Location";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  `;
function App() {
  return (
    <Container>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/accountcreated" element={<Verified />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/empty" element={<EmptyProduct />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/maindashboard" element={<MainDashboard />} />
          <Route path="/onBoarding" element={<OnBoarding />} />
          <Route path="/location" element={<Location />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product" element={<Products />} />
          <Route path="/category" element={<Categories/>} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
