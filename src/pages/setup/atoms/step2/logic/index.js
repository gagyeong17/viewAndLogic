/*
 months의 사이즈는 현재 0입니다. => 빈값, 빈배열
 현재월의 카테고리 항목을 입력하는 로직입니다.
 month는 현재월입니다.
 {month: "",
    revenues: [
            {
            name: "서비스 이용료",
            amount: 0,
            },
            {
            name: "단발성 수익",
            amount: 0,
            },
            // 변동값
            {
            name: "기타",
            list: [],
            },
        ],
        ...
        다음 단계에서 처리할 데이터
        ...
}
*/

export const initThis = {
  month: 202210,
  revenues: [
    {
      name: "서비스 이용료",
      amount: 0,
    },
    {
      name: "단발성 수익",
      amount: 0,
    },
    // 변동값
    {
      name: "기타",
      list: [],
    },
  ],
  fixed_costs: [
    {
      name: "인건비",
      amount: 0,
    },
    {
      name: "SaaS이용료",
      amount: 0,
    },
    {
      name: "임대료",
      amount: 0,
    },
    {
      name: "기타",
      list: [],
    },
  ],
  variable_costs: [
    {
      name: "추가채용",
      amount: 0,
    },
    {
      name: "운영비",
      amount: 0,
    },
    {
      name: "마케팅",
      amount: 0,
    },
    {
      name: "기타",
      list: [],
    },
  ],
};
export const setThisMonthValue = (params) => {
  //기준데이터: 화면에 보여지는 데이터
  const { thisMonth, setMonth } = params;
  //저장데이터
  const { state, setState } = params.props;
  const index = params.index;
  const event = params.event;
  //값 변경
  const revenues = thisMonth.revenues || [];
  revenues[index].amount = event?.target?.value || 0;
  //화면 데이터 갱신
  const updateThisMonth = { ...thisMonth, revenues };
  setMonth(updateThisMonth);
  //저장 데이터 갱신
  setState({ ...state, months: [updateThisMonth] });
  console.log("오잉", state);
  return;
};

export const setThisMonthETCValue = (props, e, index) => {
  return;
};
