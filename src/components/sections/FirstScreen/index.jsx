
import { ReactComponent as Headline } from "../../../assets/first-screen/headline.svg";
import { ReactComponent as Parrot } from "../../../assets/first-screen/parrot.svg";
import Input from "../../Input/index.jsx";
import MembersCard from "../../MembersCard";
import styles from "./styles.module.scss";

const FirstScreen = () => {
    return (
        <section className={styles.firstScreen}>
            <div className="left-side">
                <Headline />
                <div>
                    <p className="text-t1">
                        The scale of the challenges facing our planet can seem
                        daunting, but we can all do something.
                    </p>
                    <Input inputFor={"search"} />
                </div>
            </div>
            <div className="right-side">
                <Parrot />
                <MembersCard />
            </div>
        </section>
    );
};

export default FirstScreen;
