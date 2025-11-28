import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Experiences from "./pages/Experiences";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="publications" element={<Publications />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
