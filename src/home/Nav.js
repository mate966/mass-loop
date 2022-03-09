import React, { useState } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import BurgerMenu from "../components/BurgerMenu";
import logo from "../assets/logo.png";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav id="nav" class="wrapper">
            <img src={logo} alt="Logo firmy Mass Loop" className="logo" />
            <div className="nav__content">
                <LanguageSwitcher />
                <BurgerMenu isActive={isActive} setIsActive={setIsActive} />
            </div>
        </nav>
    );
};

export default Nav;
