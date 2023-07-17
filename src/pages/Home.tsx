import {Form} from "../components/forms/Form";
import {WEBService} from "../classes/WEBService";
import {ITService} from "../classes/ITService";
import {ITBudget} from "../classes/ITBudget";
import {parseLoadedData} from "../utils/utils";

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
    return <div className="App">
        <Form budget={budget}></Form>
        {/*<BudgetList></BudgetList>*/}
    </div>
};
export default Home;

