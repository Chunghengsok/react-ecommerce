import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div>
      <>
        <TopBar />
        <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default RootLayout;
