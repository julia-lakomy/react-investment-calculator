export default function UserInput({ onChangeInput, userInput }) {
  const DICTIONARY = {
    initialInvestment: "INITIAL INVESTMENT",
    annualInvestment: "ANNUAL INVESTMENT",
    expectedReturn: "EXPECTED RETURN",
    duration: "DURATION",
  };


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
              onChangeInput("initialInvestment", event.target.value)
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
                onChangeInput("annualInvestment", event.target.value)
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
                onChangeInput("expectedReturn", event.target.value)
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
                onChangeInput("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
