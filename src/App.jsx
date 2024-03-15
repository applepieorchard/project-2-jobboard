import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./pages/JobBoard";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";
import SignupPage from "./pages/SignupPage/SignupPage";
import Layout from "./components/layout/Layout";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const gettingToken = (data) => {
    setData(data);
  };
  return (
    <Router>
      <Layout token={data}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute Component={JobList} gettingToken={gettingToken} />
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
