import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import NotFound from "../pages/NotFound/NotFound";
import Banner from "../pages/Home/Banner/Banner";
import PhotoGallery from "../pages/Home/PhotoGallery/PhotoGallery";
import MoreSection from "../pages/Home/MoreSection/MoreSection";
import ProvidingServices from "../pages/Home/ProvidingServices/ProvidingServices";

const Main = () => {
   return (
      <div>
         <NavBar></NavBar>
         <Outlet></Outlet>
         <Banner></Banner>
         {/* <PhotoGallery></PhotoGallery> */}
         {/* <MoreSection></MoreSection> */}
         <ProvidingServices></ProvidingServices>
         {/* <NotFound></NotFound> */}
         {/* <Footer></Footer> */}
      </div>
   );
};

export default Main;