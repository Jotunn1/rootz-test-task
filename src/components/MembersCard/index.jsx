import styles from "./styles.module.scss";
import { ReactComponent as HeadIcon } from "../../assets/first-screen/head-icon.svg";

const MembersCard = () => {
    return (
        <div className={styles.membersCard}>
            <HeadIcon />
            <div>
                <h3 className="title-h3">Members</h3>
                <h4 className="title-h4">29 128</h4>
            </div>
        </div>
    );
};

export default MembersCard;
