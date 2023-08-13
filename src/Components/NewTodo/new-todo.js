
import "./new-todo.css";
import { useState } from "react";

const NewTodo = (props) => {
  const [enteredTodoName, setEnteredTodoName] = useState("");

  const [enteredDescription, setEnteredDescription] = useState("");
      
        const nameChangeHandler = (event) => {
          setEnteredTodoName(event.target.value);
        };
        const descriptionChangeHandler = (event) => {
          setEnteredDescription(event.target.value);
        };
        const submitHandler = (event) => {
          event.preventDefault();
          const todoData = {
            name: enteredTodoName,
            description: enteredDescription,
            status: "Not Completed",
          };
      
          onSaveTodoData(todoData);
          setEnteredTodoName("");
          setEnteredDescription("");
        };

  const onSaveTodoData = (enteredTodoData) => {
      const todoData = {
        ...enteredTodoData,
        id: Math.random().toString()
      };
      props.onAddNewTodo(todoData);
  }
  return (
    <div className="new-todo">
      <div className="input-title text-center text-success">
        <h2>My Todo</h2>
      </div>
      <div>
      <form onSubmit={submitHandler}>
        
        <div className="form">
          <div className="row">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Todo Name"
                value={enteredTodoName}
                onChange={nameChangeHandler}
                required
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Todo Description"
                value={enteredDescription}
                onChange={descriptionChangeHandler}
                required
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-success">
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default NewTodo;
