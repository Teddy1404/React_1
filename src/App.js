import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cars from "./components/Cars";

function App() {
  return (
    <div className="mainn">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/page/:pageParam" element={<Cars />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
