import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import UserDetail from './components/dashboard/UserDetail';
import { ModalInput } from './components/DroganUpload/ModalInput';
import MainPage from './components/layout/MainPage';
import TableCard from './components/tables/TableCard';
import UserDashboard from './components/user/UserDashboard';
const ProductCart = lazy(() => import('./components/tables/ProductCart'));
const RoutAppp: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={'/'} element={<LoginPage />} />
          <Route path={'/mainPage'} element={<MainPage />} />
          <Route path={'/userDetails'} element={<UserDetail />} />
          <Route path={'/tablecard'} element={<TableCard />} />
          <Route path={'/productcart'} element={<ProductCart />} />
          <Route path={'/userdashboard'} element={<UserDashboard />} />
          <Route path={'/modalcontainer'} element={<ModalInput />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutAppp;
