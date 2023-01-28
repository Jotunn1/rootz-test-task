import React from "react";
import Button from "../Button";
import Logo from "../Logo";
import Navigation from "../Navigation";
import styles from "./styles.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
            <Button type={"white"} btnText={"Apply"} />
        </header>
    );
};

export default Header;
