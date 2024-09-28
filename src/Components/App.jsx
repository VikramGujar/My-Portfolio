import React, {useEffect} from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills";
import ContactMe from "./Contact";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const App = () =>{
    useEffect(() => {
        AOS.init({
            duration:1000,
            once:true
        });
    },[]);

    return(
        <div>
            <Header />
            <main>
                <div data-aos="fade-up">
                <Hero/>
                </div>
            <div className="bg-zinc-900 text-zinc-50 min-h-screen" data-aos="fade-right">
                <About />
            </div>
            {/* <Experience /> */}
            <div data-aos="zoom-in">
            <Skills/>
            </div>
            <Projects />
            <ContactMe />
            </main>
            <Footer />
        </div>
        
    );
}

export default App;