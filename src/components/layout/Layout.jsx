/* eslint-disable react/prop-types */
import Header from "../Header";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";

export default function Layout({ children, ...rest }) {
  const [tokenId, setTokenId] = useState();
  let localStorageToken = JSON.parse(localStorage.getItem("token"));
  localStorageToken = localStorageToken?.idToken;

  useEffect(() => {
    if (!localStorageToken || localStorageToken === null) {
      console.log("inside if", localStorageToken);
      setTokenId(null);
    }
  }, [localStorageToken]);
  useEffect(() => {
    if (rest?.token?.idToken) {
      console.log("inside if condition");
      setTokenId(rest?.token?.idToken);
    }
  }, [rest?.token?.idToken]);

  return (
    <>
      <Header token={rest?.token} />
      {children}
      {console.log("inside jsx", tokenId)}
      {tokenId && <Footer />}
    </>
  );
}
