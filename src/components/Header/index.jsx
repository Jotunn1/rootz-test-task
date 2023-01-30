import Button from "../Button";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import Navigation from "../Navigation";
import styles from "./styles.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
            <Button type={"white"} btnText={"Apply"} />
            <MobileMenu />
        </header>
    );
};

export default Header;
