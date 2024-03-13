import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./pages/JobBoard";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />

        <Route path="/" element={<PrivateRoute Component={JobList} />} />
      </Routes>
    </Router>
  );
}

export default App;
