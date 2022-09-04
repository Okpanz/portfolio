import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Project";
const LandingPage = () => {
    return (
        <div>
            <div className="">
            
                <Header />
            </div>
            <div className="">
                <Intro />
                <Projects />
                <About />
            </div>

        </div>
    );
}

export default LandingPage;