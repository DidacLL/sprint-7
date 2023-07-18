import {Form} from "../components/forms/Form";
import {WEBService} from "../classes/WEBService";
import {ITService} from "../classes/ITService";
import {ITBudget} from "../classes/ITBudget";
import {parseLoadedData} from "../utils/utils";
import {ButtonGroup, IconButton} from "@mui/material";
import {Delete, SaveAsRounded, Share} from "@mui/icons-material";

const savedData = localStorage.getItem("current_budget")

const budget = savedData ? parseLoadedData(savedData) :
    new ITBudget([
        new WEBService("WEB",
            500,
            "Una pàgina web",
            1,
            1,
            "Creamos una web moderna y optimizada. Selecciona el numero de pagina deseado y los idiomas disponibles que necesites."),
        new ITService("SEO",
            300,
            "Una consultoria SEO",
            "Realizamos una consultoria SEO de los servicios y entorno de su empresa"),
        new ITService("ADS",
            200,
            "Una campanya de Google Ads",
            "Realizamos una campaña completa a través de Google Ads, lo que nos permite garantizar un mínimo de visitas aseguradas")
    ])

const Home = () => {
    return <div className="App" style={{display:"flex",flexFlow:"initial", backgroundColor:"cornflowerblue",minHeight:"80vh"}}>
        <div style={{backgroundColor:"white", borderRadius:"1em",margin:"1em"}}>
            <Form budget={budget}></Form>
            <ButtonGroup style={{width:"100%",justifyContent:"space-around"}}>
                <IconButton><SaveAsRounded></SaveAsRounded></IconButton>
                <IconButton><Delete></Delete></IconButton>
                <IconButton><Share></Share></IconButton>
            </ButtonGroup>
        </div>
        {/*<BudgetList></BudgetList>*/}
    </div>
};
export default Home;

