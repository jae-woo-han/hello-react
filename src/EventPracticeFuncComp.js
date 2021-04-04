import React, { useState } from 'react';

const EventPracticeFuncComp = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const {username, message} = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 객체 안에 있는 것들 가져온다(spread 연산자 검색)
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ' : ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="입력하세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracticeFuncComp;
