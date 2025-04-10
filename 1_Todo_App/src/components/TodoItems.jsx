import Item from "./Item";
import styles from "./TodoItems.module.css";
function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className={styles.item_container}>
      {todoItems.map((todoItem) => (
        <Item
          key={todoItem.name}
          todoName={todoItem.name}
          todoDate={todoItem.dueDate}
          onDeleteClick={onDeleteClick}></Item>
      ))}
    </div>
  );
}

export default TodoItems;
