import React from 'react';
// <- react파일을 가져와서 React라고 사용하겠다.
import ReactDOM from 'react-dom/client';
// <- react-dom파일을 가져와서 ReactDom라고 사용하겠다.
import App from './App';
// <- App파일을 가져와서 App라고 사용하겠다.



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
