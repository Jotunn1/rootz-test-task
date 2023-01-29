import Accordion from "../../Accordion";
import Button from "../../Button";
import styles from "./styles.module.scss";

const FAQSection = () => {
    const questionsList = [
        {
            question: "What can I do to protect our planet?",
            answer: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
        },
        {
            question: "How to save nature ecology?",
            answer: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
        },
        {
            question: "What is nature conservation?",
            answer: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
        },
    ];

    return (
        <section className={styles.faq}>
            <div className="left-side">
                <h2 className="title-h2">Ready to Get started?</h2>
                <p className="text-t1">
                    When pattern is mentioned in interior design, it is easy to
                    associate it with a geometric patterned wallpaper or
                    colourful prints on interior fabrics.
                </p>
                <Button type={"primary"} btnText={"Contact us"} />
            </div>
            <div className="right-side">
                {questionsList.map((el, index) => (
                    <Accordion
                        key={Math.random()}
                        title={el.question}
                        text={el.answer}
                        isOpenedFirstTime={index === 0 ? true : false}
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
