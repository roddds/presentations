import * as React from 'react';

window.slideTwoRenderCount = 0;

export default () => {
  window.slideTwoRenderCount++;

  const [count, setCount] = React.useState(0);
  const [onOff, setOnOff] = React.useState(false);
  const [pixels, setPixels] = React.useState(0);

  React.useEffect(() => {
    const addPixels = () => setPixels((v) => v + 1);
    document.addEventListener('mousemove', addPixels);

    return () => document.removeEventListener('mousemove', addPixels);
  });

  return (
    <div>
      <h1>Slide Two</h1>
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
      <div>Pixels hovered: {pixels}</div>
      <hr />
      <div>
        Current time: {new Date().toISOString()} - {window.slideTwoRenderCount} full renders
      </div>
      <hr />
      <small>Copyright 2021 - All Rights Reserved</small>
    </div>
  );
};
