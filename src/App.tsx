import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center">
        <BrowserRouter>
          <h1>React-Router-BasicRouteApp</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
