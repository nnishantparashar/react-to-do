import "./todo-filter.css";


const TodoFilter = (props) => {

  const changeFilterHandler = (event) =>{
      const filterString = event.target.value;
      props.onChangeFilter(filterString)
  }


  return (
    <div className='todo-header'>
      
       
          <h3 className="">My Todos</h3>
        
          <div className='filter'>
        <label className="filter-label" for="inlineFormCustomSelect">
            <h3>StatusFilter : </h3> 
          </label>
          
        
        <select 
        className="custom-select" style={{background: "#e37474"}}
        id="inlineFormCustomSelect" onChange={changeFilterHandler}
      >
        <option value = 'All' selected> All</option>
        <option value="Completed"> Completed</option>
        <option value="Not Completed"> Not Completed</option>
      </select>
      </div>
         
       
      </div>
   
  );
};

export default TodoFilter;
