import Header from "./components/Header";
import FAQSection from "./components/sections/FAQSection";
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
                <FAQSection />
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default App;
