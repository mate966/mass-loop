import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation(["about"]);

    return (
        <section id="about">
            <div className="about__content wrapper">
                <h2 className="section-heading">{t("describe")}</h2>
                <p className="paragraph">{t("pros")}</p>
            </div>
        </section>
    );
};

export default About;
