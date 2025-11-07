import React from 'react';
import ReactDOM from 'react-dom/client';

const HeaderComponent = () => (
  <div>
    {<TitleComponent/>}
    <h1>This is Header component.</h1>
  </div>
);

const TitleComponent = () => (
  <div>
    <h2>This is Title component.</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>)
