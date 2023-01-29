import React from "react";
import LogInForm from "../../LogInForm";
import styles from "./styles.module.scss";

const GetStarted = () => {
    return (
        <section className={styles.getStarted}>
            <div className="text-pair">
                <h2 className="title-h1">Get started today!</h2>
                <p className="text-t2">
                    Learn more about how you can save our planet's nature. From
                    smart consumption to switching to renewable energy, each of
                    us can do our part to save the planet.{" "}
                </p>
            </div>
            <LogInForm />
        </section>
    );
};

export default GetStarted;
