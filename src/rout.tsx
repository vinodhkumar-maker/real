import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import LoginPage from "./components/Auth/LoginPage"
import MainPage from "./components/layout/MainPage"
import UserDetail from "./components/dashboard/UserDetail"
import TableCard from "./components/tables/TableCard"
import { lazy } from "react"

const ProductCart = lazy(() => import('./components/tables/ProductCart'),);
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

                </Routes>
            </Router>
        </div>
    )
}

export default RoutAppp