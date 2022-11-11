import React, {useState} from 'react';
import './App.css';
import './styles.css';
import Cell from "./calculator/Cell";

function App() {
  const [data, setData] = useState("");
  const array = [9,8,7,6,5,4,3,2,1,0,".", "%"];
  const arrayOperator = ['+','-', '*', '/'];
  const handleClick = (e) => {
      setData(data + e.target.value)
  };

  const handleClickEqual = () => {
        try {
            setData(
                String(eval(data)).length >3 &&
                String(eval(data)).includes(".") ? String(eval(data).toFixed(5))
                    : String(eval(data))
            )
        } catch (err) {
            console.log(err);
        }
    };

  return (
      <div className="wrapper">
          <div className="show-input">
              {data}
          </div>
          <div className="digits flex">
              <Cell array = {array}  onClick = {handleClick}></Cell>
          </div>
          <div className="modifiers subgrid">
              <button onClick={() => setData(data.substr(0, data.length -1))}>
                  Clear
              </button>
              <button onClick={() => setData("")}>AC</button>
          </div>
          <div className="operations subgrid">
              <Cell array = {arrayOperator}  onClick = {handleClick}></Cell>
              <Cell array = {['=']} onClick = {handleClickEqual}></Cell>
          </div>
      </div>
  );
}

export default App;
