import React, { useState, useEffect, useRef } from "react";

import Menu from "../components/Menu";
import LanguageSwitcher from "../components/LanguageSwitcher";
import BurgerMenu from "../components/BurgerMenu";
import BuyButton from "../components/BuyButton";

import logo from "../assets/logo.png";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const sticky = navRef.current.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        });
        return () => window.removeEventListener("scroll", scrollCallBack);
    }, []);

    return (
        <nav id="nav" className={isSticky ? "sticky" : null}>
            <div className="nav__container wrapper" ref={navRef}>
                <a href="#">
                    <img
                        src={logo}
                        alt="Logo firmy Mass Loop"
                        className="logo"
                    />
                </a>
                <Menu isActive={isActive} />
                <div className="nav__content">
                    <LanguageSwitcher />
                    <BurgerMenu isActive={isActive} setIsActive={setIsActive} />
                    <BuyButton />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
