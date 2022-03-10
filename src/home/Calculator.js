const Calculator = () => {
    return (
        <section id="calculator">
            <div className="calculator__content wrapper">
                <h2 className="section-heading">Ile zaoszczędzisz?</h2>
                <p className="paragraph">Rachunek jest prosty.</p>
                <div className="calculator__input-container">
                    <p className="section-subheading">
                        Ile pojemników na szkło zapełniasz miesięcznie?
                    </p>
                    <input type="text" value="20" className="input" />
                </div>
                <div className="calculator__input-container">
                    <p className="section-subheading">
                        Ile płacisz za wywóz jednego pojemnika na szkło?
                    </p>
                    <input type="text" value="20" className="input" />
                </div>
                <div className="calculator__result">
                    <p className="section-subheading">
                        Dzięki kruszarce zaoszczędzisz{" "}
                        <span className="result__span">900 zł</span> rocznie.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
