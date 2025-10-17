import { useState, type FC, type JSX } from "react";
import "./app.css";
import calculateString from "./stringCalculator";

const App: FC = (): JSX.Element => {
  // Local States
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [isResultFetched, setIsResultFetched] = useState<boolean>(false);

  // Variables
  const canCalculate = input.trim() !== "";
  const canShowResult = canCalculate && result;
  const canShowError = canCalculate && isResultFetched && !result;

  // Functions
  const onClickCta = (): void => {
    setResult(null);

    calculateString({ input, setResult });

    setIsResultFetched(true);
  };

  return (
    <main className="App">
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Abstract Image"
        className="headerImage"
      />

      <h1 className="heading">String Calculator</h1>

      <label htmlFor="numbersInput" className="label">
        Enter numbers separated by commas or newlines:
      </label>

      <textarea
        id="numbersInput"
        aria-describedby="inputHelp"
        placeholder="e.g. 1,2,3 or 1\n2\n3"
        aria-label="Enter numbers separated by commas or newlines"
        value={input}
        onChange={(e) => {
          setIsResultFetched(false);
          setResult(null);
          setInput(e.target.value);
        }}
        className="textArea"
      />

      <button
        type="button"
        aria-label="Calculate sum of entered numbers"
        onClick={onClickCta}
        className="button"
        disabled={!canCalculate}
        aria-disabled={!canCalculate}
      >
        Calculate
      </button>

      {canShowResult ? <p className="resultText">Result: {result}</p> : null}

      {canShowError ? (
        <div role="alert" className="errorText">
          Make sure you enter numbers correctly!
        </div>
      ) : null}
    </main>
  );
};

export default App;
