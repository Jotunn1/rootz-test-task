import React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import styles from "./styles.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
            <button>Apply</button>
        </header>
    );
};

export default Header;
