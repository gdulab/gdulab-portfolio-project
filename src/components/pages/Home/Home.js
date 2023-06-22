import Hero from "../../views/Hero/Hero"

import Skills from "../../views/Skills/Skills"
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <Portfolio />
            <AboutMe />
            <Contact />
        </div>
    )
}

export default Home;