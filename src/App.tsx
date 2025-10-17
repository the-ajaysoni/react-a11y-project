import { useState, type ChangeEvent, type FC, type JSX } from "react";
import "./app.css";
import calculateString from "./stringCalculator";

const App: FC = (): JSX.Element => {
  // Local States
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isResultFetched, setIsResultFetched] = useState<boolean>(false);

  // Variables
  const canCalculate = input.trim() !== "";
  const canShowResult = canCalculate && result !== null;
  const canShowError = canCalculate && isResultFetched && error;

  // Functions
  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setResult(null);
    setError(null);
    setIsResultFetched(false);
    setInput(event.target.value);
  };

  const onClickButton = (): void => {
    try {
      setResult(calculateString(input));
      setError(null);
    } catch (error) {
      setResult(null);
      setError(error instanceof Error ? error.message : String(error));
    }

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
        onChange={onChangeTextArea}
        className="textArea"
        rows={5}
      />

      <button
        type="button"
        aria-label="Calculate sum of entered numbers"
        onClick={onClickButton}
        className="button"
        disabled={!canCalculate}
        aria-disabled={!canCalculate}
      >
        Calculate
      </button>

      {canShowResult || canShowError ? (
        <div aria-live="polite">
          {canShowResult ? (
            <p className="resultText">Result: {result}</p>
          ) : null}

          {canShowError ? (
            <div role="alert" className="errorText">
              {error || "Make sure you enter numbers correctly!"}
            </div>
          ) : null}
        </div>
      ) : null}
    </main>
  );
};

export default App;
