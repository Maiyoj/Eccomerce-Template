import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;
