import {Link, Outlet} from "react-router-dom";
import {StyledList} from "../components/styled/StyledList";

/**
 * Provisional navBar layout
 * @constructor
 */
const Layout = () => {
    return (
        <div style={{overflow:"hidden"}}>
            <nav style={{justifyContent:"center",height:"4vh"}}>
                <ul style={{justifyContent:"center", textAlign:"center",width:"100vw",display:"flex", flexDirection:"row", alignContent:"space-around",margin:"5px",padding:"5px"}}>
                    <StyledList style={{marginLeft:"5em"}}>
                        <Link to="/">Inici</Link>
                    </StyledList>
                    <StyledList style={{marginLeft:"5em"}}>
                        <Link to="/home">Calcular pressupost</Link>
                    </StyledList>
                    <StyledList style={{marginLeft:"5em"}}>
                        <Link to="/Contact">Contacta</Link>
                    </StyledList>
                    <StyledList style={{marginLeft:"5em"}}>
                        <button onClick={()=>localStorage.clear()} >Delete Cookies</button>
                    </StyledList>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
};

export default Layout;
