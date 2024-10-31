import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import UbahPassword from "./pages/UbahPassword";
import DashboardAlumni from "./pages/DashboardAlumni";
import Berita from './pages/Berita';
import Acara from './pages/Acara';
import ProgramAlumni from './pages/ProgramAlumni';



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
    {
      path: '/berita',
      element: <Berita/>
    },
    {
      path: '/acara',
      element: <Acara/>
    },
    {
      path: '/program-alumni',
      element: <ProgramAlumni/>
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>

  );
}
export default App;
