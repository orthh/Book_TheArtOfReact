import React, { useEffect, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [nickname, setnickName] = useState("");

  const onChangeName = (e) => setName(e.target.value);

  const onChangeNickname = (e) => setnickName(e.target.value);

  // useEffect :  컴포넌트가 렌더링 될 떄마다 호출
  // 컴포넌트가 화면에 맨 처음 렌더링 될 때만 실행하고,
  // 업데이트될 때는 실행하지 않으려면 함수의 두번째 파라미터로 빈배열
  // componentDidMount + componentDidUpdate
  // 배열 생략하는 거는 사용 잘 x
  useEffect(() => {
    console.log("useEffect 테스트");
  });
  // 두번째 파라미터 감지
  useEffect(() => {
    console.log("useEffect 마운트될 떄만 실행");
  }, []);

  // 특정 값이 업데이트될떄만 호출
  useEffect(() => {
    console.log("useEffect name바뀔 떄만 실행");
  }, [name]);
  // 뒷정리(cleanup함수) : 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전호출
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });
  return (
    <div>
      <div>
        <p>
          현재 카운터 값은 <b>{value}</b>입니다.
        </p>
        <button onClick={() => setValue(value + 1)}>+1</button>
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
      <div>
        <div>
          <input value={name} onChange={onChangeName} />
          <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
          <div>
            <b>이름:</b>
            {name}
          </div>
          <div>
            <b>닉네임:</b>
            {nickname}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
