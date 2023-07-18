import {Link} from "react-router-dom";
import {StyledWelcomeScreen} from "../components/styled/StyledWelcomeScreen";
import {StyledButton} from "../components/styled/StyledButton";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from "@mui/material/Box";

const LandingPage = () => {
    return (
        <StyledWelcomeScreen>
            <Box style={{padding:"10vw", backgroundColor:"white",color:"black"}}>

            <h1>Welcome to WebIT</h1>
            <h3 >
                Want a website that shines? Try WebIT, the best platform for multilingual websites, Google Ads, and SEO. Calculate your price and get a quote fast. WebIT has solutions for any need. Boost your online presence and reach more customers with WebIT. Visit our website now and see for yourself!
            </h3>
            <Link to="/home">
                <StyledButton>START!</StyledButton>
            </Link>
            </Box>
        </StyledWelcomeScreen>
    )
};

export default LandingPage;
