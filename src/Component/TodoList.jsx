import { useState } from "react";

const ToDoLists =()=>{
   const [input,setInput]=useState("");
   const [lists,setLists] =useState([])
   

   const handleChange=(e)=>{
     setInput(e.target.value)
   }
   const handleAdd=()=>{
    if(input)
      setLists([...lists,input])
      setInput('')
   }
   const handleDelete=(index)=>{
    //  const newLists = [...lists]
    //  newLists.splice(index,1);
    //  setLists(newLists)
    const newLists = lists.filter((_,i)=>i !==index);
    setLists(newLists)
   }
  return (
    <div>
      <h1>Todolist App</h1>
      <div>
        <input 
           type="text"
           value={input}
           placeholder = "add an item..."
           onChange={handleChange}
        ></input>
        <button onClick={handleAdd}>Add item</button>
      </div>
      <ul>
        {lists.map((item,index)=><li key={index}>{item}
          <button className="btn" onClick={()=>handleDelete(index)}>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}
export default ToDoLists