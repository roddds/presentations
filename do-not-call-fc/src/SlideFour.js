import * as React from 'react';

window.slideFourRenderCount = 0;
window.renderedTitle = 0;
window.renderedSubtitle = 0;
window.renderedCounter = 0;
window.renderedToggle = 0;
window.renderedInfobar = 0;
window.renderedPixels = 0;
window.renderedCopyright = 0;

export default () => {
  window.slideFourRenderCount++;

  const [count, setCount] = React.useState(0);
  const [onOff, setOnOff] = React.useState(false);
  const [pixels, setPixels] = React.useState(0);

  React.useEffect(() => {
    const addPixels = () => setPixels((v) => v + 1);
    document.addEventListener('mousemove', addPixels);

    return () => document.removeEventListener('mousemove', addPixels);
  });

  const defineTitle = () => {
    window.renderedTitle++;
    return <h1>Slide Four</h1>;
  };

  const defineSubtitle = () => {
    window.renderedSubtitle++;
    return <h2>The quick brown fox jumps over the lazy dog</h2>;
  };

  const defineCounter = () => {
    window.renderedCounter++;
    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    );
  };

  const defineToggle = () => {
    window.renderedToggle++;
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
    window.renderedPixels++;
    return <div>Pixels hovered: {pixels}</div>;
  };

  const defineInfobar = () => {
    window.renderedInfobar++;
    return (
      <div>
        Current time: {new Date().toISOString()} - {window.slideFourRenderCount} renders
      </div>
    );
  };

  const defineCopyright = () => {
    window.renderedCopyright++;
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
