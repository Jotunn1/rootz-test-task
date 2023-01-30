import Button from "../Button";
import Input from "../Input/index.jsx";
import styles from "./styles.module.scss";

const LogInForm = () => {
    return (
        <form className={styles.logIn} onSubmit={(e) => e.preventDefault()}>
            <h2 className="title-h2">Log in</h2>
            <div className="inputs">
                <Input inputFor={"Name"} />
                <Input inputFor={"Email"} />
            </div>
            <Button btnText={"Book a demo"} type={"primary"} />
            <img
                className="leafs"
                src={require("../../assets/form-leafs.png")}
                alt="leafs"
            />
        </form>
    );
};

export default LogInForm;
