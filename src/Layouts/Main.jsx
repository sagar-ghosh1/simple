import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import NotFound from "../pages/NotFound/NotFound";

const Main = () => {
   return (
      <div>
         {/* <NavBar></NavBar> */}
         <Outlet></Outlet>
         {/* <Footer></Footer> */}
         <NotFound></NotFound>
      </div>
   );
};

export default Main;