export default function User_input({ onChangeUserInput, userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initinal Investment</label>
          <input
            type="Number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeUserInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="Number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeUserInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="Number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeUserInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration of Investment</label>
          <input
            type="Number"
            required
            value={userInput.duration}
            onChange={(event) =>
              onChangeUserInput("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
