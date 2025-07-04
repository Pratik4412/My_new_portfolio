import { Outlet } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
