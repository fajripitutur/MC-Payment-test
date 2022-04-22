import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import NavBar from "./components/NavBar";
  
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
