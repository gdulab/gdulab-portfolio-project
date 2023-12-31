import { Container } from "react-bootstrap";
import NavBar from "./components/common/NavBar/NavBar";
import './styles/global.scss';
import Home from "./components/pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import GoToTop from "./components/common/GoToTop/GoToTop";

function App() {
    return (
        <main>
            <Container className="mainContainer">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </Container>
            <GoToTop />
        </main>
    );
}

export default App;
