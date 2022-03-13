import { useState, useEffect } from "react";

const Calculator = () => {
    const [yearlySavings, setYearlySavings] = useState(960);
    const [costOfrecycling, setcostOfrecycling] = useState({
        amount: 0,
        cost: 0,
    });

    const calcYearlySavings = (a, b) => {
        const consumption = a * b * 12;
        const consumptionWithCrusher = 12 * (a * b - (a * b) / 5);
        const yearlySave = consumption - consumptionWithCrusher;

        return yearlySave > 10000000
            ? null
            : setYearlySavings(yearlySave.toFixed(2).replace(".00", ""));
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const regex = new RegExp("^[0-9]*$");

        !regex.test(value)
            ? alert("Wpisz cyfry!")
            : setcostOfrecycling({
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
                <div className="calculator__inputs-container">
                    <div className="calculator__input">
                        <p className="section-subheading">
                            Ile pojemników na szkło zapełniasz miesięcznie?
                        </p>
                        <input
                            type="text"
                            placeholder="20"
                            // value={costOfrecycling.amount}
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
                            type="text"
                            // value={costOfrecycling.cost}
                            placeholder="20"
                            name="cost"
                            className="input"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="calculator__result">
                    <p className="section-subheading">
                        Dzięki kruszarce zaoszczędzisz
                        <span className="result__span">{yearlySavings} zł</span>
                        rocznie.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
