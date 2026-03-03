import { Routes, Route } from "react-router";
import HomePage from "./pages/home-page/HomePage";
import WritePage from "./pages/write-page/WritePage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/write" element={<WritePage />} />
    </Routes>
  );
}

export default App;