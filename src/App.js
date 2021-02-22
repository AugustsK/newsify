import News from "./components/News";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <div className="p-4 md:p-12">
                <News />
            </div>
        </>
    );
}


export default App;
