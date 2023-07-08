import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/authContext';
import { ColorProvider } from './context/colorContext';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
 
    <ColorProvider>
      <AuthProvider>   
          <App />
      </AuthProvider>
    </ColorProvider>

  
  // </React.StrictMode>
);

