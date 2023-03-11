import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/About" element={<About />}>
          {" "}
          About{" "}
        </Route>
        <Route path="/skills" element={<Skills />}>
          Skills{" "}
        </Route>
        <Route path="/work" element={<Work />}>
          Work{" "}
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact{" "}
        </Route>
      </Routes>

      {/* <Home />
      <About />
      <Skills />
      <Work />
      <Contact /> */}
    </div>
  );
}

export default App;
