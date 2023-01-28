import styles from "./styles.module.scss";
import { ReactComponent as Location } from "../../assets/first-screen/location.svg";
import Button from "../Button";

const Input = ({ inputFor }) => {
    const isSearchInput = inputFor === "search";

    return (
        <label className={`${styles.input} ${styles[inputFor]} cta`}>
            {isSearchInput ? (
                <>
                    <Location />
                    <input
                        type="text"
                        name={inputFor}
                        id=""
                        placeholder="Find the place to help"
                        className="text-t1"
                    />
                    <Button btnText={"search"} type={"primary"} />
                </>
            ) : (
                <input
                    type="text"
                    name={inputFor}
                    id=""
                    placeholder={inputFor}
                    className="text-t1"
                />
            )}
        </label>
    );
};

export default Input;
