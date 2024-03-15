/* eslint-disable react/prop-types */
import Header from "../Header";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";

export default function Layout({ children, ...rest }) {
  const [tokenId, setTokenId] = useState();
  let localStorageToken = JSON.parse(localStorage.getItem("token"));
  localStorageToken = localStorageToken?.idToken;
  useEffect(() => {
    if (rest?.token?.idToken) {
      setTokenId(rest?.token?.idToken);
    } else {
      if (!localStorageToken) {
        setTokenId(null);
      }
    }
  }, [rest?.token?.idToken, localStorageToken]);

  return (
    <>
      <Header token={rest?.token} />
      {children}
      {tokenId && <Footer />}
    </>
  );
}
