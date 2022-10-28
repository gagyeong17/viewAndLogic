import React, { useState, useEffect } from 'react'
import SetupView1 from './atoms/step1'
import SetupView2 from './atoms/step2'
import SetupView3 from './atoms/step3'
import SetupView4 from './atoms/step4'
import SetupView5 from './atoms/step5'
import { getComponentMonthly, InitialState } from './logic'

// const ChildComponents = [SetupView1]

const SetupView = (props) => {
  const [state, setState] = useState({ ...InitialState })
  console.log(state,'ddd')
  const [viewIdx, setViewIdx] = useState(0)
  // const [ViewComponent, setViewComponent] = useState(ChildComponents[0])
 
  useEffect(() => {
    //init
  })
  return (
    <div>
      <div style={{marginBottom:'20px',display: 'flex', flexDirection:'row', backgroundColor:'pink', justifyContent:'space-between'}}>
        <div style={{width: '50%'}}>타이틀</div>
        <div style={{width: '50%'}}>단계이미지</div>
      </div>
      {viewIdx === 0 && <SetupView1 {...props} state={state} setState={ setState } />}
      { viewIdx ===1 && <SetupView2 {...props} state={state} setState={ setState }/>}
      { viewIdx ===2 && <SetupView3 {...props} state={state} setState={ setState } />}
      { viewIdx ===3 && <SetupView4 {...props} state={state} setState={ setState } />}
      { viewIdx ===4 && <SetupView5 {...props} state={state} setState={ setState }/>}
      <button onClick={() => {
        if (viewIdx > 0) {
          setViewIdx(prev => prev - 1)
          setState(prev => {
            return {...prev, id: viewIdx-1}
          })
        }
      }}>뒤로</button>
      <button onClick={() => {
        if (viewIdx < 4) {
          setViewIdx(prev => prev + 1)
          setState(prev => {
            return {...prev, id: viewIdx+1}
          })
      }}}>다음</button>
    </div>
  )
}

export default SetupView;