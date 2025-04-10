import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import styles from "./AddTodo.module.css";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-6">
            <input
              className={`${styles.inp}`}
              type="text"
              placeholder="Add a New Task"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input
              className={`${styles.inp}`}
              type="date"
              value={todoDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-2">
            <button
              className="fs-4 btn btn-success me-3"
              type="submit"
              onClick={handleAddButtonClicked}>
              <BiMessageAdd />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
