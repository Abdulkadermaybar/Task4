import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import ContactUs from "./pages/Contact";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties/>} />
        <Route path="/propertyDetails" element={<PropertyDetails/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
