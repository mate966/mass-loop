import crusherImage from "../assets/mass-loop-crusher.png";

const Header = () => {
    return (
        <header id="header">
            <h1 className="welcome-heading">
                Inteligenta kruszarka, która zamienia szkło w piasek.
            </h1>
            <div className="header__content">
                <img
                    src={crusherImage}
                    alt="Kruszarka firmy Mass Loop"
                    className="crusher-image"
                />
                <button className="button"></button>
            </div>
        </header>
    );
};

export default Header;
