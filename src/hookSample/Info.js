import React, { useReducer } from 'react';

//리듀서 적용
function reducer(state, action) {
  //name에 적을 경우 name은 value를 받고 나머지는 구조분해 할당을 통해 현재 상태를 그대로 반환한다.
  return {
    ...state,//스테이트 전체할당 구조분해할당
    [action.name]: action.value,//action으로 e.target이 넘어온다. 
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>별명:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
