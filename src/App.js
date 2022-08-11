import "./App.css";
import GithubDetails from "./components/GithubDetails";
import GithubForm from "./components/GithubForm";
import { useSelector } from "react-redux/es/exports";

function App() {
    const data = useSelector((state) => state.resp);
    return (
        <div className="App">
            <h1>Hello Elliot!!!</h1>
            <GithubForm />
            {data.login && <GithubDetails />}
        </div>
    );
}

export default App;
