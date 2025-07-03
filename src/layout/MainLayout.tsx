import Footer from "@/components/module/Footer/Footer";
import Navbar from "@/components/module/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
