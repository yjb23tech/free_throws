import { createRoot } from "react-dom/client";
import NavBar from "./components/NavBar";
import logo from "./images/react-logo.png";

const App = () => {

    return (
        <div>
            <NavBar />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);