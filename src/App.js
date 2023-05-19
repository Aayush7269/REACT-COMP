import React from 'react'
import ShowResults from './ShowResults'
import { useState } from 'react'

import{Form} from'./Form'
const App = () => {
  const[display, displaySub] = useState("cc")
  return (
    <div>
   <Form func = {displaySub}/>  
   <ShowResults display = {display}/>
    </div>
  )
}

export default App