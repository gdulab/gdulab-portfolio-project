import { Container } from "react-bootstrap";
import NavBar from "./components/views/NavBar/NavBar";
import './styles/global.scss';
import Hero from "./components/views/Hero/Hero";
import Skills from "./components/views/Skills/Skills";

function App() {
    return (
        <Container className="mainContainer">
            <NavBar />
            <Hero />
            <Skills />
        </Container>
    );
}

export default App;
