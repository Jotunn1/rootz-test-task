import React from "react";
import styles from "./styles.module.scss";

const Navigation = () => {
    const pagesList = ["Home", "Our mission", "Places", "Team"];

    return (
        <nav className={styles.navigation}>
            <ul>
                {pagesList.map((el) => (
                    <li className="text-t1 cta" key={Math.random()}>
                        {el}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
