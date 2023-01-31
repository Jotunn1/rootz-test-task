import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";

const Accordion = ({ title, text, isOpenedFirstTime }) => {
    const [isActive, setIsActive] = useState(false);
    const collapsingText = useRef(null);

    useEffect(() => {
        if (isOpenedFirstTime) setTimeout(() => setIsActive(true), 300);
        // added setTimeout hack for first page loading, when browser didnt download fonts . It cause unproperly behavior of accordion because of paragraph text calculation with default font.
    }, [isOpenedFirstTime]);

    return (
        <div
            className={`${styles.accordion} ${
                isActive ? styles.open : styles.closed
            }`}
        >
            <div className="row" onClick={() => setIsActive(!isActive)}>
                <h5 className="title-h5">{title}</h5>
                <button className="cta">
                    {" "}
                    {isActive ? <Minus /> : <Plus className="plus" />}
                </button>
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
