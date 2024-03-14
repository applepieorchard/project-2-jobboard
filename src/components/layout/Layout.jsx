/* eslint-disable react/prop-types */
import Header from "../Header";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  const localstorageToken = localStorage.getItem("token");
  return (
    <>
      <Header />
      {children}
      {localstorageToken && <Footer />}
    </>
  );
}
