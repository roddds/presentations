import * as React from 'react';

export default () => {
  const [count, setCount] = React.useState(0);

  const getTitle = () => {
    return <h1>Title</h1>;
  };
  const getSubTitle = () => {
    return <h2>The quick brown fox jumps over the lazy dog</h2>;
  };
  const getBody = () => {
    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    );
  };
  const getFooter = () => {
    return <small>Copyright 2021 - All Rights Reserved</small>;
  };

  return (
    <div>
      {getTitle()}
      {getSubTitle()}
      {getBody()}
      {getFooter()}
    </div>
  );
};
