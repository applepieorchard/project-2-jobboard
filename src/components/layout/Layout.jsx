/* eslint-disable react/prop-types */
import Header from "../Header";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
export default function Layout({ children }) {
  const isAuthenticate = useSelector((state) => state?.auth?.isAuthenticate);

  return (
    <>
      <Header />
      {children}
      {isAuthenticate && <Footer />}
    </>
  );
}
