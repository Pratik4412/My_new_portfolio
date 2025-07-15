import { Outlet } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col lg:gap-16 md:gap-11 gap-8 ">
        <Outlet />
        <Footer />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
