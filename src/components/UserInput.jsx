import { useState } from "react";

export default function UserInput() {
  const DICTIONARY = {
    initialInvestment: "INITIAL INVESTMENT",
    annualInvestment: "ANNUAL INVESTMENT",
    expectedReturn: "EXPECTED RETURN",
    duration: "DURATION",
  };

  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInputChange(inputIdentifier, newValue) {
    console.log(inputIdentifier, newValue);
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial_investment">
            {DICTIONARY.initialInvestment}
          </label>
          <input
            id="initial_investment"
            name="initial_investment"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleInputChange("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label htmlFor="annual_investment">
            {DICTIONARY.annualInvestment}
          </label>
          <input
            id="annual_investment"
            name="annual_investment"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleInputChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected_return">{DICTIONARY.expectedReturn}</label>
          <input
            id="expected_return"
            name="expected_return"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleInputChange("expectedReturn", event.target.value)
            }
          />
        </p>

        <p>
          <label htmlFor="duration">{DICTIONARY.duration}</label>
          <input
            id="duration"
            name="duration"
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleInputChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
