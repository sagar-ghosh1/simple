import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import NotFound from "../pages/NotFound/NotFound";
import Banner from "../pages/Home/Banner/Banner";

const Main = () => {
   return (
      <div>
         {/* <NavBar></NavBar> */}
         <Outlet></Outlet>
         <Banner></Banner>
         {/* <Footer></Footer> */}
         {/* <NotFound></NotFound> */}
      </div>
   );
};

export default Main;