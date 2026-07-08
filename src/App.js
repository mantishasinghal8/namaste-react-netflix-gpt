import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "";

    const routeName = location.pathname.replace(/\//g, "-").replace(/^-/, "");

    const className = routeName ? `${routeName}Page` : "landingPage";

    document.body.classList.add(className);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;