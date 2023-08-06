import Register from "./components/Register/Register";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
      </>
    </Routes>
  );
}

export default App;
