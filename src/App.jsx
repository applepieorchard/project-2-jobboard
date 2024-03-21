import "./App.css";
import "./AppResponsive.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./pages/JobBoard";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/" element={<JobList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
