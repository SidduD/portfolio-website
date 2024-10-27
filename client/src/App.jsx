import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

function App({ toggleTheme }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout toggleTheme={toggleTheme} />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
