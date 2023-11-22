export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">initial investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            } //here event is property provided by react ie whatever user is typing will be in event and we can pass this to handleChange
          />
        </p>
        <p>
          <label htmlFor="">annual investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            } //here event is property provided by react ie whatever user is typing will be in event and we can pass this to handleChange
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">expected return </label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)} //here event is property provided by react ie whatever user is typing will be in event and we can pass this to handleChange
          />
        </p>
        <p>
          <label htmlFor="">duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)} //here event is property provided by react ie whatever user is typing will be in event and we can pass this to handleChange
          />
        </p>
      </div>
    </section>
  );
}
