import React, { useState } from "react";



const Parent = ({isLogged})=>{

    let [validate,setValidate] = useState({
        name :"",
        password:""
      })
    
    let {name,password} =  validate
    
    function change(e){
      let v = e.target.value;
      let key = e.target.name
    
      setValidate({...validate,[key]:v})
    
    
    }
    
    function validation(e){
    e.preventDefault()
      if(!name && !password){
        alert("all field reqired")
      }
      
      isLogged(true)
    }
    
      return (
        <div>
    
    
    
    <form onSubmit={validation}>
      <input type="text" name="name" onChange={change} />
      <input type="password" name="password" onChange={change} />
      <button>Submit</button>
    </form>
        </div>
      )
}

export default Parent