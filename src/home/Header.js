import { useMediaQuery } from "react-responsive";

import crusherImage from "../assets/mass-loop-crusher.png";
import crusherImageDesktop from "../assets/mass-loop-crusher-desktop.png";

const Header = () => {
    const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

    return (
        <header id="header">
            <div data-aos="fade-left">
                <h1 className="welcome-heading">
                    Inteligenta kruszarka, która zamienia szkło w piasek.
                </h1>
            </div>
            <div data-aos="fade-left">
                <div className="header__content">
                    {isDesktop ? (
                        <img
                            src={crusherImageDesktop}
                            alt="Kruszarka firmy Mass Loop"
                            className="crusher-image"
                        />
                    ) : (
                        <img
                            src={crusherImage}
                            alt="Kruszarka firmy Mass Loop"
                            className="crusher-image"
                        />
                    )}
                    <button className="cart-button"></button>
                </div>
            </div>
        </header>
    );
};

export default Header;
