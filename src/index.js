import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 여기서 'App'은 애플리케이션의 주요 컴포넌트로 가정합니다.
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
