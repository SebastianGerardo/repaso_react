import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Page2 from "./pages/Page2/Page2";
import Page1 from "./pages/Page1/Page1";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/pagina1" element={<Page1 />} />
        <Route path="/pagina2" element={<Page2 />} />
      </Route>
    </Routes>
  );
}

export default App;
