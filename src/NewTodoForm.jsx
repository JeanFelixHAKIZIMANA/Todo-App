import { useState } from "react"

export function NewTodoForm ({addTodo}) {
   
    const [NewItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(NewItem === "") return

        addTodo(NewItem)
  
        setNewItem("")
      }

    return ( 
    <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'> 
         <label htmlFor='item'>New Item</label>
         <input 
         value={NewItem} 
         onChange={e => setNewItem(e.target.value)}
         type='text' 
         id='item' />
        </div>
       <button className='btn'>Add</button>
    </form>
    )
    
}