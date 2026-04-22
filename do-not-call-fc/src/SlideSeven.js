import * as React from 'react';

window.slideSevenRenderCount = 0;
window.renderedTitle = 0;
window.renderedSubtitle = 0;
window.renderedCounter = 0;
window.renderedToggle = 0;
window.renderedInfobar = 0;
window.renderedCopyright = 0;

const DefineTitle = () => {
  window.renderedTitle++;
  return <h1>Title Seven ({window.renderedTitle})</h1>;
};

const DefineSubtitle = () => {
  window.renderedSubtitle++;
  return <h2>The quick brown fox jumps over the lazy dog ({window.renderedSubtitle})</h2>;
};

const DefineCounter = () => {
  window.renderedCounter++;
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <div>
        Count: {count} ({window.renderedCounter})
      </div>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

const DefineToggle = () => {
  window.renderedToggle++;
  const [onOff, setOnOff] = React.useState(false);
  return (
    <div>
      <div>Toggle power: ({window.renderedToggle})</div>
      <button style={{ backgroundColor: onOff ? 'green' : 'red' }} onClick={() => setOnOff(!onOff)}>
        {onOff ? 'on' : 'off'}
      </button>
    </div>
  );
};

const DefineInfobar = () => {
  window.renderedInfobar++;
  return (
    <div>
      Current time: {new Date().toISOString()} - {window.slideSevenRenderCount} renders ({window.renderedInfobar})
    </div>
  );
};

const DefinePixels = () => {
  const [pixels, setPixels] = React.useState(0);

  React.useEffect(() => {
    const addPixels = () => setPixels((v) => v + 1);
    document.addEventListener('mousemove', addPixels);

    return () => document.removeEventListener('mousemove', addPixels);
  });

  window.renderedPixels++;
  return (
    <div>
      Pixels hovered: {pixels} ({window.renderedPixels})
    </div>
  );
};

const DefineCopyright = () => {
  window.renderedCopyright++;
  return <small>Copyright 2021 - All Rights Reserved ({window.renderedCopyright})</small>;
};

export default () => {
  window.slideSevenRenderCount++;
  return (
    <div>
      <DefineTitle />
      <DefineSubtitle />
      <hr />
      <DefineCounter />
      <hr />
      <DefineToggle />
      <hr />
      <DefinePixels />
      <hr />
      <DefineInfobar />
      <hr />
      <DefineCopyright />
    </div>
  );
};
