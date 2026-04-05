import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-20 overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;