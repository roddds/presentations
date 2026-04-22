import * as React from 'react';

window.titleRenderCount = window.titleRenderCount || 0;
window.subtitleRenderCount = window.subtitleRenderCount || 0;
window.bodyRenderCount = window.bodyRenderCount || 0;
window.footerRenderCount = window.footerRenderCount || 0;

export default () => {
  const [count, setCount] = React.useState(0);

  const getTitle = () => {
    titleRenderCount += 1;
    return <h1>Title ({titleRenderCount})</h1>;
  };

  const getSubTitle = () => {
    subtitleRenderCount += 1;
    return <h2>The quick brown fox jumps over the lazy dog ({bodyRenderCount})</h2>;
  };

  const getBody = () => {
    bodyRenderCount += 1;
    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    );
  };
  const getFooter = () => {
    footerRenderCount += 1;
    return <small>Copyright 2021 - All Rights Reserved ({footerRenderCount})</small>;
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
