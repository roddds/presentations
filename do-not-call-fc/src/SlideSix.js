import * as React from 'react';

window.slideSixRenderCount = 0;
window.renderedTitle = 0;
window.renderedSubtitle = 0;
window.renderedCounter = 0;
window.renderedToggle = 0;
window.renderedInfobar = 0;
window.renderedCopyright = 0;

export default () => {
  window.slideSixRenderCount++;

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
    return <h1>Slide Six ({window.renderedTitle})</h1>;
  };

  const defineSubtitle = () => {
    window.renderedSubtitle++;
    return <h2>The quick brown fox jumps over the lazy dog ({window.renderedSubtitle})</h2>;
  };

  const defineCounter = () => {
    window.renderedCounter++;
    return (
      <div>
        <div>
          Count: {count} ({window.renderedCounter})
        </div>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    );
  };

  const defineToggle = () => {
    window.renderedToggle++;
    return (
      <div>
        <div>Toggle power: ({window.renderedToggle})</div>
        <button style={{ backgroundColor: onOff ? 'green' : 'red' }} onClick={() => setOnOff(!onOff)}>
          {onOff ? 'on' : 'off'}
        </button>
      </div>
    );
  };

  const definePixels = () => {
    window.renderedPixels++;
    return (
      <div>
        Pixels hovered: {pixels} ({window.renderedPixels})
      </div>
    );
  };

  const defineInfobar = () => {
    window.renderedInfobar++;
    return (
      <div>
        Current time: {new Date().toISOString()} - {window.slideSixRenderCount} renders ({window.renderedInfobar})
      </div>
    );
  };

  const defineCopyright = () => {
    window.renderedCopyright++;
    return <small>Copyright 2021 - All Rights Reserved ({window.renderedCopyright})</small>;
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
