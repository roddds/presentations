import * as React from 'react';

export default () => {
  const [count, setCount] = React.useState(0);
  const [onOff, setOnOff] = React.useState(false);

  return (
    <div>
      <h1>Title</h1>
      <h2>The quick brown fox jumps over the lazy dog</h2>
      <hr />
      <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
      <hr />
      <div>
        <div>Toggle power:</div>
        <button style={{ backgroundColor: onOff ? 'green' : 'red' }} onClick={() => setOnOff(!onOff)}>
          {onOff ? 'on' : 'off'}
        </button>
      </div>
      <hr />
      <div>Current time: {new Date().toISOString()}</div>
      <hr />
      <small>Copyright 2021 - All Rights Reserved</small>
    </div>
  );
};
