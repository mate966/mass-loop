import BuyButton from "../components/BuyButton";

const Menu = ({ isActive }) => {
    return (
        <>
            <ul className={isActive ? "nav__menu" : "not-active"}>
                <li className="menu-item">
                    <a href="#" className="menu-paragraph">
                        Policz zyski
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-paragraph">
                        O produkcie
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-paragraph">
                        Kontakt
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-paragraph">
                        FAQ
                    </a>
                </li>
                {isActive ? <BuyButton /> : null}
            </ul>
        </>
    );
};

export default Menu;
