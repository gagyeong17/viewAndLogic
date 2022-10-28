import React,{useState, useEffect} from 'react'
import { setCashAmount } from './logic';

const SetupView1 = (props) => {
  const {state, setState} = props;
  console.log(state)
  useEffect(() => {
    //init
  })
  return (
    <div>{state?.cash?.name}
      {/* {state?.cash?.amount}  */}
      <h1>step1</h1>
    
      <input
        defaultValue={state?.cash?.amount}
        onChange={(e) => {setState((prev) => setCashAmount(prev, e))
        }}
      />
    
    
    </div>
  )
}

export default SetupView1;