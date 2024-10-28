import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import UbahPassword from "./pages/UbahPassword";
import DashboardAlumni from "./pages/DashboardAlumni";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      index: true,
      element: <Beranda />,
    },
    {
      path: '/masuk',
      element: <Login />,
    },
    {
      path: '/ubah-kata-sandi',
      element: <UbahPassword />,
    },
    {
      path: '/dashboard-alumni',
      element: <DashboardAlumni />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
