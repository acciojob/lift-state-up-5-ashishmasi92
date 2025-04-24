
import React, { useState } from "react";
import './../styles/App.css';
import Parent from "./Parent";
const App = () => {
  let [isLoggedIn,setIsLoggedIn] = useState(false)



  return (
  
<div>
<h1>Parent Component</h1>
{isLoggedIn == true? (<p> You are logged in. </p>):<>
 
  <Parent
  isLogged={setIsLoggedIn}
  />
</> }
    </div>    
  )
}

export default App
