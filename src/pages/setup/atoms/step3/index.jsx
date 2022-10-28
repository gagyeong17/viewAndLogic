import React,{useState, useEffect} from 'react'

const SetupView3 = (props) => {
  // const [state, setState] = useState({ id: 0 })
  const state = props?.state;
  useEffect(() => {
    //init
  })
  return (
    <div>step{state?.id || "11"}</div>
  )
}

export default SetupView3;