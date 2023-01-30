import Header from "./components/Header";
import FAQSection from "./components/sections/FAQSection";
import FirstScreen from "./components/sections/FirstScreen";
import GetStarted from "./components/sections/GetStarted";
import TeamSection from "./components/sections/TeamSection";
import Footer from "./components/Footer";
import SliderSection from "./components/sections/SliderSection";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="wrapper">
                <FirstScreen />
                <TeamSection />
                <GetStarted />
                <FAQSection />
                <SliderSection />
                <Footer />
            </div>
        </div>
    );
};

export default App;
