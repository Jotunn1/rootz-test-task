import Header from "./components/Header";
import FAQSection from "./components/sections/FAQSection";
import FirstScreen from "./components/sections/FirstScreen";
import GetStarted from "./components/sections/GetStarted";
import TeamSection from "./components/sections/TeamSection";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="wrapper">
                <FirstScreen />
                <TeamSection />
                <GetStarted />
                <FAQSection />
                <Footer />
            </div>
        </div>
    );
};

export default App;
