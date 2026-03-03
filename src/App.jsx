import { Routes, Route } from "react-router";
import HomePage from "./pages/home-page/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}/>
    </Routes>
  );
}

export default App;