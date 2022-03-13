import { useTranslation } from "react-i18next";

const Buy = () => {
    const { t } = useTranslation(["buy"]);

    return (
        <>
            <section id="buy">
                <div className="buy__content wrapper">
                    <p className="paragraph">{t("question")}</p>
                    <button className="buy-button">
                        {t("button")} <span>8499 zł</span>
                    </button>
                    <p className="section-heading--smaller">{t("sentence")}</p>
                </div>
            </section>
        </>
    );
};

export default Buy;
