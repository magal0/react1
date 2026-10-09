import React, { useState } from 'react'
import Card from './react'

const App = () => {
  let [data,setData]=useState([{
    id:1,
    name:"Ali",
    age:17
  }])

  let handleDelete=(id)=>{
    setData(data.filter((e)=>e.id!=id))
  }

  let handleSubmit=(e)=>{
    e.preventDefault()
    let newUser={
      name:e.target.name.value,
      age:e.target.age.value,
      id:Date.now()
    }
    setData([...data,newUser])
    e.target.reset()
  }

  return (
    <div>
      <div>
        <form className='addFrom' onSubmit={handleSubmit}>
          <input type="text" name='name' />
          <input type="text" name='age' />
          <button type='submit'>add</button>
        </form>
      </div>

      {

        data.map((e)=>{
        return <div key={e.id}>
          <h1>{e.name}</h1>
          <p>{e.age}</p>
          <button onClick={()=>handleDelete(e.id)}>Delete</button>
          <button onClick={()=>handleEdit()}>Edit</button>
        </div>
      })

      }
    </div>
  )
}

export default App