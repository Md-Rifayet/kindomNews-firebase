import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.jsx';
import AuthProvidr from './providers/AuthProvidr.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvidr>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvidr>
  </React.StrictMode>,
)
