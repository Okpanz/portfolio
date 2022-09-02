import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Project";
const LandingPage = () => {
    return (
        <>
            <div className="">

                <Header />
                <Intro />
                <Projects />
                <About />
            </div>

        </>
    );
}

export default LandingPage;