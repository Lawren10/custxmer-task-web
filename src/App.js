import Custxmer from "./components/Custxmer";
import Navigation from "./components/Navigation";
import FooterSection from "./components/FooterSection";
import BreadCrumb from "./components/BreadCrumb";
import AboutPage from "./components/AboutPage";
import ServicePage from "./components/ServicePage";
import ContactPage from "./components/ContactPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <BreadCrumb />

        <Routes>
          <Route path="/" element={<Custxmer />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Service" element={<ServicePage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>

        <FooterSection />
      </BrowserRouter>
    </>
  );
}

export default App;
