/* eslint-disable react/prop-types */

import { useEffect } from "react";
import Header from "../Header";
import Footer from "../footer/Footer";
export default function Layout({ children }) {
  useEffect(() => {
    console.log("window.location.pathname === ", window.location.href);
  }, []);
  return (
    <>
      <Header />
      {children}
      {window.location.pathname === "/" && <Footer />}
    </>
  );
}
