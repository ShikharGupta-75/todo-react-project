import axios from "axios";
import { useState } from "react";
import {v4} from "uuid";

function TodoForm({ addItem }) {

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(text.trim() !== ""){
      const newItem = {
        id: v4(),
        text,
        completed:false
      };
      try{
        const response = await axios.post('http://localhost:3210/todos', newItem);
        addItem(response.data);
        setText('');
      }
      catch(e){
        console.error("There was an error submitting the task!", e)
      }
    }
    else{
      alert('Add a task !!');
    }

  }
  
  return (
    <>
      <form className="row justify-content-between align-items-center" onSubmit={handleSubmit}>
        <input type="text" className="p-2 bg-dark rounded-4 col-10 text-light" placeholder="Add your new task" value={text} onChange={handleChange} />
        <button type="submit" className="border-danger bg-danger rounded-4 col-auto fw-bold fs-3 text-white">+</button>
      </form>
    </>
  );
}

export default TodoForm;
