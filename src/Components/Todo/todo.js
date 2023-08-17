

import { CardGroup } from "react-bootstrap";
import "./todo.css";
import { computeHeadingLevel } from "@testing-library/react";


const Todo = (props) => {

  
 
const statusChangeHandler = (event, id) => {
    const newStatus = event.target.value 
    props.onChangeStatus(id, newStatus)
}
  
const deleteHandler = (event, id) => {
  event.preventDefault();
  props.handleDelete(id);
  
}

const handleEdit = (event, id) => {
  event.preventDefault();
  props.editTask(id);
  console.log((id))
}
  


  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">Name : {props.todo.name}</p>
        <p className="card-text">Description : {props.todo.description}</p>
        <label className="filter-label" for="inlineFormCustomSelect">
          <p>Status : </p>
        </label>
       
        <div>
      <select 
        className="custom-select" onChange={(e)=>statusChangeHandler(e, props.todo.id)}
        id="inlineFormCustomSelect" style={{background: "#e37474"}}
        
      >
        <option value={props.todo.status} selected>{props.todo.status} (selected)</option>
       
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
        <div className="action-btn">
          <button className="btn btn-success m-2 px-4" onClick={(e) => {handleEdit(e, props.todo.id)}}>Edit</button>
          {/* // deleteHandler(e, props.todo.id) */}
          <button className="btn btn-danger m-2" onClick={(e) => {if(window.confirm("Delete the task?")){
              deleteHandler(e, props.todo.id);
          }}}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
