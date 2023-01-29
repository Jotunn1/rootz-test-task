import Header from "./components/Header";
import FirstScreen from "./components/sections/FirstScreen";
import GetStarted from "./components/sections/GetStarted";
import TeamSection from "./components/sections/TeamSection";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="wrapper">
                <FirstScreen />
                <TeamSection />
                <GetStarted />
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default App;
