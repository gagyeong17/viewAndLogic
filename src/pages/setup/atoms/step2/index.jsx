import React,{useState, useEffect} from 'react'
import { setThisMonthValue, initThis,setThisMonthETCValue } from './logic';

const SetupView2 = (props) => {
  // const {state, setState} = props;
// console.log(state.months,'ggg')
  const [thisMonths, setThisMonth] = useState({ ...(props?.months || initThis) });
  
  // useEffect(() => {
  //   //init
  // })

  return (
    <div>
      <h1>step2</h1>
      <div>
        {thisMonths?.revenues?.[0]?.name}
        <input
          defaultValue={thisMonths?.revenues?.[0]?.amount}
          onChange={(e) => { setThisMonthValue({ thisMonths, setThisMonth, props, event: e, index: 0 }) }}
      />
      </div>
      <div>
        {thisMonths?.revenues?.[1]?.name}
        <input
          defaultValue= {thisMonths?.revenues?.[1]?.amount}
          onChange={(e) => { setThisMonthValue({ thisMonths, setThisMonth, props, event: e, index: 1 }) }}
      />
      </div>
     {/* 기타 이름 변경되는 부분  */}
      <div>
        {thisMonths?.revenues?.[2]?.list.length
          ? <>배열돌려돌려 <input
          defaultValue= {thisMonths?.revenues?.[2]?.amount}
        onChange={(e) => {setThisMonthETCValue(props, e,2)
        }}
      /></>
          : null}
      </div>
      <button>카테고리추가</button>
     
    </div>
  )
}

export default SetupView2;