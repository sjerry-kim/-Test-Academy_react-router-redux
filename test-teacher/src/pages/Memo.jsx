import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo } from "../modules/memos";

const Memo = () => {
  // useState는 하나의 컴포넌트 안에서 사용할 때
  // onChange를 통해서 바뀌는 값
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // 값을 모든 컴포넌트에서 사용 (자주 바뀌지 않게)
  // 리듀서를 이용해한 화면 데이터 제어
  // useSelector 가져온 값은 dispatch가 일어나면 다시 가져온다 
  // -> 콘텍스트와는 다르게 자동 업데이트(콘텍스트는 useEffect를 사용해야 없데이트 됨)
  const memoList = useSelector((state)=>state.memoList);
  const dispatch = useDispatch();

  const addMemo = (e) => {
    e.preventDefault();
    dispatch(addmemo({
      date: new Date(),
      name : name,
      text : text,
    }));
  }

  return (
    <div>
      <h1>방명록을 작성해주세요</h1>
      <hr />
      <form onSubmit={addMemo} >
        <label>이름</label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} size={5}/>
        <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
        <input type="submit" />
      </form>
      <hr />
      <ul>
        {
          memoList.map((memo)=>(
            <li>{memo.name} : {memo.text} {memo.date.getMonth()+1}/{memo.date.getDate()}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Memo;