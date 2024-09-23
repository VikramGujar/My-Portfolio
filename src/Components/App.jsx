import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills";
import ContactMe from "./Contact";

function App(){
    return(
        <div>
            <Header />
            <main>
                <Hero/>
            <div className="bg-zinc-900 text-zinc-50 min-h-screen">
                <About />
            </div>
            <Skills/>
            <Projects />
            <ContactMe />
            </main>
            <Footer />
        </div>
        
    );
}

export default App;