import * as React from 'react';

window.slideThreeRenderCount = 0;

export default () => {
  window.slideThreeRenderCount++;

  const [count, setCount] = React.useState(0);
  const [onOff, setOnOff] = React.useState(false);
  const [pixels, setPixels] = React.useState(0);

  React.useEffect(() => {
    const addPixels = () => setPixels((v) => v + 1);
    document.addEventListener('mousemove', addPixels);

    return () => document.removeEventListener('mousemove', addPixels);
  });

  const defineTitle = () => {
    return <h1>Slide Three</h1>;
  };

  const defineSubtitle = () => {
    return <h2>The quick brown fox jumps over the lazy dog</h2>;
  };

  const defineCounter = () => {
    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    );
  };

  const defineToggle = () => {
    return (
      <div>
        <div>Toggle power:</div>
        <button style={{ backgroundColor: onOff ? 'green' : 'red' }} onClick={() => setOnOff(!onOff)}>
          {onOff ? 'on' : 'off'}
        </button>
      </div>
    );
  };

  const definePixels = () => {
    return <div>Pixels hovered: {pixels}</div>;
  };

  const defineInfobar = () => {
    return (
      <div>
        Current time: {new Date().toISOString()} - {window.slideThreeRenderCount} full renders
      </div>
    );
  };

  const defineCopyright = () => {
    return <small>Copyright 2021 - All Rights Reserved</small>;
  };

  return (
    <div>
      {defineTitle()}
      {defineSubtitle()}
      <hr />
      {defineCounter()}
      <hr />
      {defineToggle()}
      <hr />
      {definePixels()}
      <hr />
      {defineInfobar()}
      <hr />
      {defineCopyright()}
    </div>
  );
};
