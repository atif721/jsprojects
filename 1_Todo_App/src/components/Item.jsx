import { MdDelete } from "react-icons/md";
function Item({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger fs-4"
            onClick={() => onDeleteClick(todoName)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;
