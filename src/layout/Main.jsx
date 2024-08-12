import { Outlet } from "react-router-dom";
import { Footer } from "../Pages/Home/Shared/Footer/Footer";
import NavBar from "../Pages/Home/Shared/NavBar/NavBar";

export const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
