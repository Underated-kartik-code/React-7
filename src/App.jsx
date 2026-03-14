import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const getData = async() =>{

   const response = await axios.get('https://jsonplaceholder.typicode.com/users')

   setData(response.data)

   console.log(response.data)
  }
  return (
    <div>
      <button onClick={getData}> Get data</button>
      <div className='container'>
        {data.map(function(elem,idx){
          return <div key={idx}>
            <div className='card'>

              <h2>{elem.name}</h2>
              <p>{elem.email}</p>
              <h3>{elem.website}</h3>
          
          </div>
        </div>
      })}
      </div>
    </div> 
  )
}

export default App