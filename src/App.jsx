import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMesg from "./components/WelcomeMesg";

function App() {
  const [todoItems, setTodoItems] = useState([
    // {
    //   name: "Buy Milk",
    //   dueDate: "05/16/2025",
    // },
  ]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <WelcomeMesg></WelcomeMesg>}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
      </center>
    </>
  );
}

export default App;
