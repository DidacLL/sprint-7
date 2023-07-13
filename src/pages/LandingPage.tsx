import {Link} from "react-router-dom";
import {StyledWelcomeScreen} from "../components/styled/StyledWelcomeScreen";
import {StyledButton} from "../components/styled/StyledButton";

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
