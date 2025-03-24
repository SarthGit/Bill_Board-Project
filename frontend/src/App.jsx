import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/userContext';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import FindBillboards from "./pages/FindBillboards";
import BillboardDetails from "./pages/BillboardDetails";
import AddBillboard from "./pages/AddBillboard";

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/find-billboards" element={<FindBillboards />} />
        <Route path="/billboard-details/:id" element={<BillboardDetails />} />
        <Route path="/add-billboard" element={<AddBillboard />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
