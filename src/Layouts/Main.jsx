import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import NotFound from "../pages/NotFound/NotFound";
import Banner from "../pages/Home/Banner/Banner";
import PhotoGallery from "../pages/Home/PhotoGallery/PhotoGallery";

const Main = () => {
   return (
      <div>
         <NavBar></NavBar>
         <Outlet></Outlet>
         <Banner></Banner>
         <PhotoGallery></PhotoGallery>
         <NotFound></NotFound>
         <Footer></Footer>
      </div>
   );
};

export default Main;