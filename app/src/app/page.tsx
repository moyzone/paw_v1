import About from "./AboutUs/page";
import Contact from "./ContactUs/page";
import Products from "./Products/page";
import Home from "./Home/page";
export default function HomePage() {
  return (
    <div>
      <Home/>
      <About/>
      <Products/>
      <Contact/>
    </div>
  );
}
