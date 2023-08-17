import './todos.css'
import Todo from '../Todo/todo';
import {useContext} from 'react';
import { todoContext } from '../../App';
import { computeHeadingLevel } from '@testing-library/react';



const Todos = (props) => {
    const {todos, filterString} = useContext(todoContext)
    

    const ChangeStatus = (id, newStatus) =>{
      props.onChangeStatus(id, newStatus)
    }

    let filteredData = todos

    

    if(filterString === 'All'){
      filteredData = todos;
    }else{
      filteredData = todos.filter(todo => todo.status === filterString)
      
    }

    const deleteTask = (id)=>{
        props.onDeleteTask(id);
    }

    const editHandler = (id)=>{
      props.onEditTask(id);
      console.log(id)
  }

    
    
    return (
        <div className='container'>
            {filteredData.length ?
      filteredData.map((todo) => {
        return <Todo todo={todo} onChangeStatus ={ChangeStatus} handleDelete ={deleteTask} editTask = {editHandler}/>;
      }): <div className='filtered'>No Data To Show....!!</div>}
        </div>
    );
};

export default Todos