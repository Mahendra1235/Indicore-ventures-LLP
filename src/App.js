import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./pages/Home";
import People from "./pages/People";
import Labs from "./pages/Labs";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
