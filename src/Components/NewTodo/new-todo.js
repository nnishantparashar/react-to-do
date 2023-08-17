import "./new-todo.css";
import { useState, useContext, useEffect } from "react";
import { todoContext } from "../../App";

const NewTodo = (props) => {
  const { editData, edit } = useContext(todoContext);


  const editId = editData[0].id;
  const editName = editData[0].name;
  const editDes = editData[0].description;
  const editStatus = editData[0].status;

  
  const [enteredTodoName, setEnteredTodoName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [updateTodoName, setUpdateTodoName] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  

  useEffect(() => {
    setUpdateTodoName(editName);
    setUpdateDescription(editDes);
   
    
  },[editName, editDes]);

  
  

  const nameChangeHandler = (event) => {
    setEnteredTodoName(event.target.value);
  };
  const nameUpdateHandler = (event) => {
    setUpdateTodoName(event.target.value);
  };

  const descriptionUpdateHandler = (event) => {
    setUpdateDescription(event.target.value);
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
  
 

{/*Issue: Unable to perform edit any 2nd item or newly added item.  button change working 
but not getting input values. */}

  //---------------------------------------------------------------------------

  const updateHandler = (event) => {
    event.preventDefault();

    console.log(updateTodoName);
    console.log(updateDescription);

    const updateData = {
      id: editId,
      name: updateTodoName,
      description: updateDescription,
      status: editStatus,
    };

    onUpdateTodoData(updateData);
    setUpdateTodoName("")
    setUpdateDescription("")
    
  };

  const onUpdateTodoData = (updateTodoData) => {
    props.onUpdateTodo(updateTodoData);
    
  };

  // -----------------------------------------------------------------

  const onSaveTodoData = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString(),
    };
    props.onAddNewTodo(todoData);
  };
  return (
    <div className="new-todo">
      <div className="input-title text-center text-success">
        <h2>My Todo</h2>
      </div>
      
      {edit ? (
        <div>
          <form onSubmit={updateHandler}>
            <div className="form">
              <div className="row">
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Todo Name"
                    defaultValue={updateTodoName}
                    onChange={nameUpdateHandler}
                    required
                  />
                </div>
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Todo Description"
                    defaultValue={updateDescription}
                    onChange={descriptionUpdateHandler}
                    required
                  />
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-success">
                    Update Todo
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default NewTodo;
