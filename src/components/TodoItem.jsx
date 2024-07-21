import { useState } from "react";
import binIcon from "../assets/delete.svg"

function TodoItem({todo, onToggle, onDelete, onUpdate}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    onUpdate(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <>
      <li className="d-flex justify-content-between align-items-center gap-4 bg-dark my-3 px-2 py-1 border border-secondary rounded-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {isEditing ? (
          <textarea
            name="edit task"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="form-control bg-black text-white"
          />
        ) : (
          <span
            className={
              todo.completed
                ? "text-decoration-line-through text-white-50 fs-4 "
                : "text-white fs-4 "
            }
          >
            {todo.text}
          </span>
        )}
        <div className="buttons d-flex align-items-center gap-2">
            <div onClick={isEditing ? handleSave : handleEdit} className="bg-danger text-light p-1 px-2 rounded-2" style={{cursor:"pointer"}}>{isEditing ? "Save" : "Edit"}</div>
            <div onClick={() => onDelete(todo.id)} style={{cursor:"pointer"}}><img src={binIcon} alt="binIcon" /></div>
        </div>
      </li>
    </>
  );
}

export default TodoItem;
