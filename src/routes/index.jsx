import { BrowserRouter } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';

function Routes() {
  return (
    <BrowserRouter>
      <UserRoutes />

      {/* TRATAR PARA QUE APENAS O USUARIO COM A ROLE DE ADMIN TENHA ACESSO */}
      <AdminRoutes />
    </BrowserRouter>
  );
}

export default Routes;
