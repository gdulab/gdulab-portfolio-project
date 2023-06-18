import { Container } from "react-bootstrap";
import NavBar from "./components/views/NavBar/NavBar";
import './styles/global.scss';
import Hero from "./components/views/Hero/Hero";

function App() {
    return (
        <Container className="mainContainer">
            <NavBar />
            <Hero />
        </Container>
    );
}

export default App;
