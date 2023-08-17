import NewTodo from "./Components/NewTodo/new-todo";
import TodoFilter from "./Components/TodoFilter/todo-filter";
import Todos from "./Components/Todos/todos";
import { createContext, useState } from "react";

// dummy data
const Dummy_Todo = [
  {
    id: "1",
    name: "fetch Api 1",
    description: "fetch data from all listed apis",
    status: "Not Completed",
  },
  {
    id: "2",
    name: "fetch Api 2",
    description: "fetch data from all listed apis",
    status: "Not Completed",
  },
  {
    id: "3",
    name: "fetch Api 3",
    description: "fetch data from all listed apis",
    status: "Not Completed",
  },
];

export const todoContext = createContext(null);

function App() {

  //useState variables
  const [todos, setTodos] = useState(Dummy_Todo);
  const [edit, setEdit] = useState(false);
  const [filterString, setFilterString] = useState("All");
  const [editData, setEditData] = useState([{id: "",name: "",description: "",status: ""}]);


  // handle new todo

  const addTodoHandler = (todo) => {
    setTodos((prevState) => {
      return [todo, ...prevState];
    });
  };

  
// handle delete

  const deleteHandler = (id) => {
    const newTodo = todos.filter((obj) => obj.id !== id);
    setTodos(newTodo);
  };



//handle update

  const updateTodoHandler = (updateData) => {
    console.log(updateData);
    setEdit(false);
    
  };

  //handle edit

  const editHandler = (id) => {
    const data = todos.filter((obj) => obj.id === id);
    setEditData(data);
    setEdit(true);
  };

 

//handle status change

  const onChangeStatus = (id, newStatus) => {
    const updated_todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = newStatus;
      }
      return todo;
    });

    setTodos(updated_todos);
  };

  // handle filter change

  const filteredTodo = (filter) => {
    setFilterString(filter);
  };

  return (
    <todoContext.Provider value={{ todos, filterString, editData, edit }}>
      <div className="App">
        <NewTodo
          onAddNewTodo={addTodoHandler}
          onUpdateTodo={updateTodoHandler}
        />
        <TodoFilter onChangeFilter={filteredTodo} />
        <Todos
          onChangeStatus={onChangeStatus}
          onDeleteTask={deleteHandler}
          onEditTask={editHandler}
        />
      </div>
    </todoContext.Provider>
  );
}

export default App;
