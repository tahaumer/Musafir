import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home"
import Gallery from "./components/Gallery"
import Carousel1 from "./components/Carousels";
import GalleryCarousel from "./components/GalleryCarousel";
import Contact from "./components/Contact";


function App() {
  return (
  <div className="bg-secondary w-full">
    <Home/>
    <Carousel1/>
    <GalleryCarousel/>
    <Gallery/>
    <Contact/>
    <Footer/>
   </div>
  );
}
export default App;
