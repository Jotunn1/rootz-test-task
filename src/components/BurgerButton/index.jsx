import styles from "./styles.module.scss";

const BurgerButton = ({ isMenuActive, setMenuActive }) => {
    return (
        <button
            className={`${styles.burger} ${
                isMenuActive ? styles.cross : styles.default
            } cta`}
            onClick={setMenuActive}
        >
            <div className="line top-line"></div>
            <div className="line middle-line"></div>
            <div className="line bottom-line"></div>
        </button>
    );
};

export default BurgerButton;
