import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
    <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path={"/signup"} element={<Signup></Signup>} />
          <Route path={"/login"} element={<Login></Login>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
