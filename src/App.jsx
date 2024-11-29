import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Slick from "./components/Slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <MyNav />
      <Menu></Menu>
      {/* Normal Gallery */}
      {/* <Gallery movieName="Star Wars" />
      <Gallery movieName="Harry Potter" />
      <Gallery movieName="Batman" /> */}
      <Slick movieName="Batman"></Slick>
      <Slick movieName="Star Wars"></Slick>
      <Slick movieName="Harry Potter"></Slick>
      <MyFooter/>
    </>
  );
}

export default App;
