import About from "./AboutUs/page";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./ContactUs/page";
import Products from "./Products/page";
import Home from "./Home/page";
export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}
