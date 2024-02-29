import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 6,
  });
  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(inputIdentifier, newValue) {
    console.log(inputIdentifier, newValue);
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput
        userInput={userInput}
        onChangeInput={handleInputChange}
      ></UserInput>

      {inputIsValid && <ResultTable data={userInput}></ResultTable>}
      {!inputIsValid && (
        <p className="center">Please enter a duration grater then zero. </p>
      )}
    </>
  );
}

export default App;
