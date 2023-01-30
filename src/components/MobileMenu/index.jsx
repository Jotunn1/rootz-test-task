import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Button from "../Button";
import BurgerButton from "../BurgerButton";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState(false);

    const pagesList = ["Home", "Our mission", "Places", "Team"];

    useEffect(() => {
        const body = document.querySelector("body");
        isActive
            ? (body.style.overflow = "hidden")
            : (body.style.overflow = "auto");
    }, [isActive]);

    const toggleMenu = () => setIsActive(!isActive);

    return (
        <div
            className={`${styles.mobileMenu} ${
                isActive ? styles.open : styles.closed
            }`}
        >
            <BurgerButton isMenuActive={isActive} setMenuActive={toggleMenu} />
            <div>
                <nav>
                    <ul>
                        {pagesList.map((el) => (
                            <li className="text-t4" key={Math.random()}>
                                {el}
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button type={"white"} btnText={"Apply"} />
            </div>
        </div>
    );
};

export default MobileMenu;
