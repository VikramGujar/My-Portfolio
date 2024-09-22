import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";

function App(){
    return(
        <div>
            <Header />
            <main>
                <Hero/>
            </main>
            <div className="bg-zinc-900 text-zinc-50 min-h-screen">
                <About />
            </div>
            
        </div>
    );
}

export default App;