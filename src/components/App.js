
import React, { useState } from "react";
import './../styles/App.css';
import Parent from "./Parent";
const App = () => {
  let [isLoggedIn,setIsLoggedIn] = useState(false)



  return (
  
<div>
{isLoggedIn == true? (<h1>Welcome! You are logged in. </h1>):<>
  <h1>Please log in</h1>
  <Parent
  isLogged={setIsLoggedIn}
  />
</> }
    </div>    
  )
}

export default App
