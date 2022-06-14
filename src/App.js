import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
      result.json().then((resp)=>{
        // console.warn("result", resp)
        setData(resp)
      })
    })
  },[])
  console.warn(data)
  return (
    <div className="App">
     <h1>Hello World!</h1>
     <table border="1">
       <tr>
         <td>ID</td>
         <td>Name</td>
         <td>Username</td>
         <td>Email</td>
       </tr>
       {
         data.map((item)=>
         <tr>
         <td>{item.id}</td>
         <td>{item.name}</td>
         <td>{item.username}</td>
         <td>{item.email}</td>
       </tr>
         )
       }
     </table>
    </div>
  );
}

export default App;
