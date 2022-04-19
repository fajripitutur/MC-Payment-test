import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpensePage from "./pages/ExpensePage";
import IncomePage from "./pages/IncomePage";
import OverviewPage from "./pages/OverviewPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="expenses" element={<ExpensePage />} />
        <Route path="income" element={<IncomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
