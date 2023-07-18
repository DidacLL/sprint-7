import {Outlet} from "react-router-dom";
import {NavBar} from "../components/NavBar";
import {LicenseBar} from "../components/LicenseBar";


/**
 * Provisional navBar layout
 * @constructor
 */
const Layout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet/>
            <LicenseBar/>
        </>
    )
};

export default Layout;
