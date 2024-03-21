/* eslint-disable react/prop-types */

import Header from "../Header";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
export default function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      <Header />
      {children}
      {location.pathname === "/" && <Footer />}
    </>
  );
}
