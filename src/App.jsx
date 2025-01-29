import { useState } from "react";

import Header from "./componets/Header";
import User_input from "./componets/User_input";
import Results from "./componets/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

const inputIsValid = userInput.duration >= 1;

  function expectedInvestmentReturns(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <User_input
        userInput={userInput}
        onChangeUserInput={expectedInvestmentReturns}/>
        {!inputIsValid && <p className="center">Please make sure to enter a duration that is NOT bellow zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
