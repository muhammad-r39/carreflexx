import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cgv" element={<PrivacyPolicy />}></Route>
        <Route path="/cgu" element={<TermsAndConditions />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
