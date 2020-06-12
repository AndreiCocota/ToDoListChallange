import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputArea from "./InputArea";
import "bootstrap/dist/css/bootstrap.min.css";
import Delete from "@material-ui/icons/DeleteForever";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  const handleDelete = e => {
    const { id } = e.target.parentElement;
    items.splice(id, 1);
    setItems([...items]);
  };

  function handlingChange(e, index) {
    const newItem = [...items];
    newItem[index] = e.target.value;
    setItems(newItem);
  }

  return (
    <div className="App">
      <Header />
      <div className="containerApp">
        <div className="inputArea">
          <InputArea onAdd={addItem} />
        </div>
        <div className="todoItems">
          <ul>
            {items.map((todoItem, index) => (
              <form>
                <input type="checkbox" />
                <input
                  className="todoItem"
                  key={index}
                  id={index}
                  value={todoItem}
                  type="text"
                  onChange={handlingChange}
                />
                <Delete className="deleteButton" onClick={handleDelete} />
                <hr />
              </form>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
