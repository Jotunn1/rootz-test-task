import Header from "./components/Header";
import FirstScreen from "./components/sections/FirstScreen";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="wrapper">
                <FirstScreen />
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default App;
