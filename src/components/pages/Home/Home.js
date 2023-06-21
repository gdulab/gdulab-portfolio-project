import Hero from "../../views/Hero/Hero"

import Skills from "../../views/Skills/Skills"
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <Portfolio />
            <AboutMe />
        </div>
    )
}

export default Home;