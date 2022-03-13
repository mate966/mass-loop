import { useEffect } from "react";
import i18next from "i18next";

const LanguageSwitcher = () => {
    const handleLanguageChange = (e) => {
        i18next.changeLanguage(e.target.value);
    };

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("pl");
        }
    }, []);

    return (
        <select
            name="language"
            className="language-input"
            onChange={handleLanguageChange}
            value={localStorage.getItem("i18nextLng")}
        >
            <option value="pl">PL</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="fr">FR</option>
        </select>
    );
};

export default LanguageSwitcher;
