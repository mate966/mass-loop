import crusherImage from "../assets/mass-loop-crusher.png";

const Header = () => {
    return (
        <header id="header">
            <h1 className="welcome-heading">
                Inteligenta kruszarka, która zamienia szkło w piasek.
            </h1>
            <img
                src={crusherImage}
                alt="Kruszarka firmy Mass Loop"
                class="crusher-image"
            />
        </header>
    );
};

export default Header;
