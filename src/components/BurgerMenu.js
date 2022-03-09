const BurgerMenu = ({ isActive, setIsActive }) => {
    const handleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            class={isActive ? "hamburger" : "hamburger is-active"}
            id="hamburger-1"
            onClick={handleActive}
        >
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    );
};

export default BurgerMenu;
