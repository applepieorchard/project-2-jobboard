import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute(props) {
  const [token, setToken] = useState();
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken == null) {
      window.location.pathname = "/login";
      // navigate("/login");
    } else {
      setToken(localStorageToken);
    }
  }, []);
  useEffect(() => {
    navigate("/");
  }, [token]);
  // return token ? <Component /> : null;
  return <Component />;
}

// class AuthService {
//   getToken() {
//     return localStorage.getItem("token");
//   }

//   loggedIn() {
//     const token = this.getToken();
//     return token;
//   }
// }

// export default new AuthService();
