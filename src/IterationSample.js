import React, { useState } from 'react';

const IterationSample = () => {
  //데이터 배열, 텍스트 입력할 수 있는 input state, 대이터 배열에서 사용할 고유 id state
  const [names, setNames] = useState([
    { id: 1, text: 'snowman' },
    { id: 2, text: 'ice' },
    { id: 3, text: 'snow' },
    { id: 4, text: 'wind' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
      const nextNames = names.concat({
          id: nextId,
          text: inputText
      });
      setNextId(nextId+1);
      setNames(nextNames);
      setInputText('');
  }
  const onRemove = id => {
      const nextNames = names.filter(name => name.id !== id);
      setNames(nextNames);
  }
  //onDoubleClick 동작 이해안가면 props 쪽 보고 올 것
  const nameList = names.map((name) => <li onDoubleClick={()=>onRemove(name.id)} key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
