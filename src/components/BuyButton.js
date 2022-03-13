import { useTranslation } from "react-i18next";

const BuyButton = () => {
    const { t } = useTranslation("buy");

    return (
        <button className="buy-button buy-button--nav">{t("button")}</button>
    );
};

export default BuyButton;
