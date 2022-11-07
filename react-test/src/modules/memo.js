const initalState = {
  memolist : [],
  date : new Date()
}

export const addmemo = (memo) => ({type:"addMemo", payload: memo})

// 리듀서 작성
function memo(state=initalState, action) {
  switch(action.type) {
      case "addMemo":
          console.log(action.payload)

          const newMemo = {
            name : action.payload.name,
            text : action.payload.text,
            month : state.date.getMonth()+1,
            date : state.date.getDate()
          }
          // 새로운 메모를 가지는 리스트
          const newMemoList = state.memolist.concat(newMemo)
          return { ...state, memolist : newMemoList}
      default:
          return state;
  }
}

export default memo;