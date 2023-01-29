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
            <div className="images-wrapper">
                <img
                    className="image image-1"
                    src={require("../../../assets/team/img_1.png")}
                    alt="Team member"
                />
                <img
                    className="image image-2"
                    src={require("../../../assets/team/img_2.png")}
                    alt="Team member"
                />
                <img
                    className="image image-3"
                    src={require("../../../assets/team/img_3.png")}
                    alt="Team member"
                />
                <img
                    className="image line line-1"
                    src={require("../../../assets/team/line_1.png")}
                    alt="Line"
                />
                <img
                    className="image line line-2"
                    src={require("../../../assets/team/line_2.png")}
                    alt="Line"
                />
            </div>
        </section>
    );
};

export default TeamSection;
