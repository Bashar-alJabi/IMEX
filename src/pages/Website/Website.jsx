import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import NavbarLinks from "../../components/Navbar/Navbar"

const Website = () => {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-between">
            <NavbarLinks />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Website