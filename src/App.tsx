import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="publications" element={<Publications />} />
          {/* <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
