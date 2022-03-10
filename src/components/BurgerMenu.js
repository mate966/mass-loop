const BurgerMenu = ({ isActive, setIsActive }) => {
    const handleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={isActive ? "hamburger is-active" : "hamburger"}
            id="hamburger-1"
            onClick={handleActive}
        >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    );
};

export default BurgerMenu;
