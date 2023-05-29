import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
// @ts-ignore
import App from './app/app';
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
