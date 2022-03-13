import { useTranslation } from "react-i18next";
import BuyButton from "../components/BuyButton";

const Menu = ({ isActive }) => {
    const { t } = useTranslation(["nav"]);

    return (
        <>
            <ul className={isActive ? "nav__menu" : "not-active"}>
                <li className="menu-item">
                    <a href="#" className="menu-paragraph">
                        {t("menu-item1")}
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-paragraph">
                        {t("menu-item2")}
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-paragraph">
                        {t("menu-item3")}
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-paragraph">
                        {t("menu-item4")}
                    </a>
                </li>
                {isActive ? <BuyButton /> : null}
            </ul>
        </>
    );
};

export default Menu;
