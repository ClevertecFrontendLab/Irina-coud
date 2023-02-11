import { Outlet } from 'react-router-dom';
import { Navigate } from './navigate/navigate';

import { WrapperContent } from './main-layout.styled';

export const MainLayout = () => (

  <WrapperContent >
    <Navigate />
    <Outlet />
  </WrapperContent>
);
