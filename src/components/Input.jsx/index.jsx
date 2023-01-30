import styles from "./styles.module.scss";
import { ReactComponent as Location } from "../../assets/first-screen/location.svg";
import Button from "../Button";

const Input = ({ inputFor }) => {
    const isSearchInput = inputFor === "search";

    return (
        <label
            className={`${styles.input} ${
                isSearchInput ? styles.search : null
            } cta`}
        >
            {isSearchInput ? (
                <>
                    <Location />
                    <input
                        type="text"
                        name={inputFor}
                        placeholder="Find the place to help"
                        className="text-t1 search"
                    />
                    <span></span>
                    <Button btnText={"search"} type={"primary"} />
                </>
            ) : (
                <>
                    <input
                        type="text"
                        name={inputFor}
                        placeholder={inputFor}
                        className="text-t1"
                    />
                    <span></span>
                </>
            )}
        </label>
    );
};

export default Input;
