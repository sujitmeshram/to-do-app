import React, { useState } from "react";
import ToDoLists from "./YourList";

const App = () => {
  {
    /* Hooks //for state we need hooks 
    [] means empty array
    */
  }
  const [inputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  // taking input from input onChange and giving value to setInputList
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  //storing the list of items
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

const deleteItem=(id)=>{
  setItems((oldItems)=>{

    return oldItems.filter((arrayElem, index)=>{
      return index !==id;
    })
  })
}

  return (
    <div className="main_div">
      <div className="center_div">
        <br />

        <h1>YourList</h1>

        <br />

        <input
          type="text"
          placeholder="add items"
          onChange={itemEvent}
          value={inputList}
        />

        {/* onclick listOfItems */}
        <button onClick={listOfItems}>+</button>

        <ol>
          {/* <li> {inputList}</li> showing value under the input using map */}

          {Items.map((itemval,index) => {
            return <ToDoLists key={index}
            id={index}
            text={itemval} 
            onSelect={deleteItem}
            />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
