import styles from "./styles.module.scss";

const Button = ({ btnText, type }) => {
    return (
        <button
            className={`${styles.button} ${styles[type]} ${
                btnText === "search" ? styles.small : ""
            } cta`}
        >
            {btnText}
        </button>
    );
};

export default Button;
