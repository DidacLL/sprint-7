import {Link} from "react-router-dom";
import {StyledWelcomeScreen} from "../components/styled/StyledWelcomeScreen";
import {StyledButton} from "../components/styled/StyledButton";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const LandingPage = () => {
    return (
        <StyledWelcomeScreen>
            <h1>Welcome</h1>
            <Link to="/home">
                <StyledButton>START!</StyledButton>
            </Link>
        </StyledWelcomeScreen>
    )
};

export default LandingPage;
