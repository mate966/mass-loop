import { useEffect } from "react";

import Home from "./home/Home";

import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
import "./css/main.css";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 2400,
        });
    }, []);

    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
