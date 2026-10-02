import Footer from "../home/Footer";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";
import Navbar from "../navbar/Navbar";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 ">
        {children}
      </div>
      <LoginModal />
      <RegisterModal />
      <Footer />
    </>
  );
}
