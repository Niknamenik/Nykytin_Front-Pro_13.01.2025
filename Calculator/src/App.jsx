import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const [currValue, setCurrValue] = useState("");
  const [accumalator, setAccumalator] = useState("");
  const [currOperator, setCurrOperator] = useState("");

  function operatorHandler(operator) {
    if (currValue) {
      switch (operator) {
        case "+":
          setAccumalator((+currValue + +accumalator).toString());
          setCurrValue("");
          setCurrOperator("+");
          break;
        case "-":
          setAccumalator((+currValue - +accumalator).toString());
          setCurrValue("");
          setCurrOperator("-");
          break;
        case "*":
          setAccumalator(
            accumalator ? (+currValue * +accumalator).toString() : currValue
          );
          setCurrValue("");
          setCurrOperator("*");
          break;
        case "/":
          setAccumalator(
            accumalator ? (+currValue / +accumalator).toString() : currValue
          );
          setCurrValue("");
          setCurrOperator("/");
          break;
        case "x^y":
          setAccumalator(currValue);
          setCurrValue("");
          setCurrOperator("x^y");
          break;
        case "sqrt":
          setCurrValue(Math.sqrt(+currValue).toString());
          break;
        case "%":
          setCurrValue((+currValue / 100).toString());
          break;
        case "sin":
          setCurrValue(Math.sin(currValue).toString());
          break;
        case "cos":
          setCurrValue(Math.cos(currValue).toString());
          break;
      }
    } else {
      switch (operator) {
        case "+":
          setCurrOperator("+");
          break;
        case "-":
          setCurrOperator("-");
          break;
        case "*":
          setCurrOperator("*");
          break;
        case "/":
          setCurrOperator("/");
          break;
        case "x^y":
          setCurrOperator("x^y");
          break;
        case "sqrt":
          break;
        case "sin":
          break;
        case "cos":
          break;
      }
    }
  }

  function btnClickHandler(data) {
    setCurrValue(`${currValue + data}`);
  }

  function delBtnHendler(title) {
    switch (title) {
      case "C":
        const arrInputData = currValue.toString().split("");
        arrInputData.pop();
        const newInputData = arrInputData.join("");
        setCurrValue(newInputData);
        break;
      case "AC":
        setCurrValue("");
        setAccumalator("");
        break;
    }
  }

  function equalClickHndler(data, event) {
    event.preventDefault();
    if (!currOperator) {
      return;
    }
    let equalValue;
    switch (currOperator) {
      case "+":
        equalValue = +accumalator + +currValue;
        break;
      case "-":
        equalValue = +accumalator - +currValue;
        break;
      case "*":
        equalValue = +accumalator * +currValue;
        break;
      case "/":
        equalValue = +accumalator / +currValue;
        break;
      case "x^y":
        equalValue = Math.pow(+accumalator, +currValue);
        break;
    }
    setCurrValue(equalValue.toString());
    setAccumalator("");
    setCurrOperator("");
  }

  return (
    <form className="main_container">
      <Header />
      <div className="input">
        <Input type={"text"} value={currValue} />
      </div>
      <div className="functionality">
        <div className="numbers">
          <Button
            title={"1"}
            btnType={"button"}
            id={1}
            onClick={btnClickHandler}
          />
          <Button
            title={"2"}
            btnType={"button"}
            id={2}
            onClick={btnClickHandler}
          />
          <Button
            title={"3"}
            btnType={"button"}
            id={3}
            onClick={btnClickHandler}
          />
          <Button
            title={"4"}
            btnType={"button"}
            id={4}
            onClick={btnClickHandler}
          />
          <Button
            title={"5"}
            btnType={"button"}
            id={5}
            onClick={btnClickHandler}
          />
          <Button
            title={"6"}
            btnType={"button"}
            id={6}
            onClick={btnClickHandler}
          />
          <Button
            title={"7"}
            btnType={"button"}
            id={7}
            onClick={btnClickHandler}
          />
          <Button
            title={"8"}
            btnType={"button"}
            id={8}
            onClick={btnClickHandler}
          />
          <Button
            title={"9"}
            btnType={"button"}
            id={9}
            onClick={btnClickHandler}
          />

          <Button title={"C"} btnType={"button"} onClick={delBtnHendler} />
          <Button
            title={"0"}
            btnType={"button"}
            id={0}
            onClick={btnClickHandler}
          />

          <Button title={"AC"} btnType={"button"} onClick={delBtnHendler} />
        </div>

        <div className="operators">
          <Button
            title={"+"}
            btnType={"button"}
            id={"+"}
            onClick={operatorHandler}
          />
          <Button
            title={"-"}
            btnType={"button"}
            id={"-"}
            onClick={operatorHandler}
          />
          <Button
            title={"*"}
            btnType={"button"}
            id={"*"}
            onClick={operatorHandler}
          />
          <Button
            title={"/"}
            btnType={"button"}
            id={"/"}
            onClick={operatorHandler}
          />
          <Button
            title={"x^y"}
            btnType={"button"}
            id={"x^y"}
            onClick={operatorHandler}
          />
          <Button
            title={"sqrt"}
            btnType={"button"}
            id={"sqrt"}
            onClick={operatorHandler}
          />
          <Button
            title={"%"}
            btnType={"button"}
            id={"%"}
            onClick={operatorHandler}
          />
          <Button
            title={"sin"}
            btnType={"button"}
            id={"sin"}
            onClick={operatorHandler}
          />
          <Button
            title={"cos"}
            btnType={"button"}
            id={"cos"}
            onClick={operatorHandler}
          />
          <Button title={"="} onClick={equalClickHndler} />
        </div>
      </div>
    </form>
  );
}

export default App;
