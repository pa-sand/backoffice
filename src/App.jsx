import SideBar from "./Component/SideBar/SideBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Counter from "./pages/counter";
import Deposit from "./pages/deposit";
import Manage from "./pages/manage";
import ManageStocks from "./pages/manageStocks";
import Opacity from "./pages/opacity";
import Operationcenter from "./pages/operationcenter";
import Profile from "./pages/profile";
import { Box } from "@mui/material";
function App() {
  return (
    <BrowserRouter>
      <Box display={"flex"}>
        <Box flex={1}>
          <SideBar />
        </Box>
        <Box flex={7}>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/manageStocks" element={<ManageStocks />} />
            <Route path="/opacity" element={<Opacity />} />
            <Route path="/operationcenter" element={<Operationcenter />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
