import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Root from './routes/route';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Debounce from './debouncing/Debounce';
import ContextApp from './context/ContextApp';
import RefComponent from './ref/RefComponent';
import MemoizeComponent from './memoization/MemoizeComponent';
import ParentComponent from './forwardRef/ParentComponent';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/lern-react',
    element: <Root />,
  },
  {
    path: '/class-component',
    element: <ClassComponent name={'Sid'} />,
  },
  {
    path: '/functional-component',
    element: <FunctionalComponent name={'Sid'} />,
  },
  {
    path: '/debouncing',
    element: <Debounce />,
  },
  {
    path: '/memoization',
    element: <MemoizeComponent />,
  },
  {
    path: '/context-api',
    element: <ContextApp />,
  },
  {
    path: '/ref',
    element: <RefComponent />,
  },
  {
    path: '/forward-ref',
    element: <ParentComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
