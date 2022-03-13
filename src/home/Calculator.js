import { useState, useEffect } from "react";

const Calculator = () => {
    const [yearlySavings, setYearlySavings] = useState(0);
    const [costOfrecycling, setcostOfrecycling] = useState({
        amount: 0,
        cost: 0,
    });

    const calcYearlySavings = (a, b) => {
        const consumption = a * b * 12;
        const consumptionWithCrusher = 12 * (a * b - (a * b) / 5);
        const yearlySave = consumption - consumptionWithCrusher;

        return yearlySave > 10000000
            ? setYearlySavings("ponad 10 000 000")
            : setYearlySavings(yearlySave.toFixed(2).replace(".00", ""));
    };

    const handleChange = (e) => {
        const value = e.target.value;

        setcostOfrecycling({
            ...costOfrecycling,
            [e.target.name]: value,
        });
    };

    useEffect(() => {
        calcYearlySavings(costOfrecycling.amount, costOfrecycling.cost);
    });

    return (
        <section id="calculator">
            <div className="calculator__content wrapper">
                <h2 className="section-heading">Ile zaoszczędzisz?</h2>
                <p className="paragraph">Rachunek jest prosty.</p>
                <div data-aos="zoom-in">
                    <div className="calculator__inputs-container">
                        <div className="calculator__input">
                            <p className="section-subheading">
                                Ile pojemników na szkło zapełniasz miesięcznie?
                            </p>
                            <input
                                type="number"
                                placeholder="20"
                                name="amount"
                                className="input"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="calculator__input">
                            <p className="section-subheading">
                                Ile płacisz za wywóz jednego pojemnika na szkło?
                            </p>
                            <input
                                type="number"
                                placeholder="20 zł"
                                name="cost"
                                className="input"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="calculator__result">
                        <p className="section-subheading">
                            Dzięki kruszarce zaoszczędzisz
                            <span
                                className={
                                    yearlySavings === "0"
                                        ? "result__span"
                                        : "result__span result__span--color"
                                }
                            >
                                {yearlySavings === "0" ? "960" : yearlySavings}{" "}
                                zł
                            </span>
                            rocznie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
