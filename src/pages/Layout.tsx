import {Outlet} from "react-router-dom";
import {NavBar} from "../components/NavBar";
import {LicenseBar} from "../components/LicenseBar";


/**
 * Provisional navBar layout
 * @constructor
 */
const Layout = () => {
    return (
        < div style={{height: "100%", overflow: "hidden"}}>
            <NavBar></NavBar>
            <Outlet/>
            <LicenseBar/>
        </div>
    )
};

export default Layout;
