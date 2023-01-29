import { useState, useRef } from "react";
import styles from "./styles.module.scss";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";

const Accordion = ({ title, text }) => {
    const [isActive, setIsActive] = useState(false);
    const collapsingText = useRef(null);

    return (
        <div
            className={`${styles.accordion} ${
                isActive ? styles.open : styles.closed
            }`}
            onClick={() => setIsActive(!isActive)}
        >
            <div className="row">
                <h5 className="title-h5">{title}</h5>
                <span> {isActive ? <Minus /> : <Plus />}</span>
            </div>

            <p
                ref={collapsingText}
                className="text-t1"
                style={
                    isActive
                        ? { height: collapsingText.current.scrollHeight + "px" }
                        : { height: "0px" }
                }
            >
                {text}
            </p>
        </div>
    );
};

export default Accordion;
