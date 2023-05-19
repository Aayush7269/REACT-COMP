import { useState } from "react"
import {Tree} from './Title'

export const Form = ({func})=>{
    const[str, strDisplay] = useState("df")
   
const handleOnChange = (e)=>{
const{name, value} = e.target
    strDisplay(value)
    
}

const handleOnSubmit= (e)=>{
     e.preventDefault()
    func(str)
    
}
    return <div>
        <Tree data= {str}/>
        
        <form action="" onSubmit={handleOnSubmit}>
            <input type="text" onChange={handleOnChange} />
      <button>submit</button></form>
    </div>
}