import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import UbahPassword from "./pages/UbahPassword";
import DashboardAlumni from "./pages/DashboardAlumni";


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Beranda />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ubahkatasandi" element={<UbahPassword />} />
          <Route path="/dashboardalumni" element={<DashboardAlumni />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;
