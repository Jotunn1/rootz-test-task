import React from "react";
import styles from "./styles.module.scss";

const TeamSection = () => {
    return (
        <section className={styles.team}>
            <div className="title-pair">
                <h2 className="title-h1">Our top team</h2>
                <p className="text-t2">
                    Learn more about how you can save our planet's nature.{" "}
                </p>
            </div>
        </section>
    );
};

export default TeamSection;
