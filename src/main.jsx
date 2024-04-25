import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SurveyList from './Components/SurveyList.jsx';
import AnswerForm from './Components/AnswerForm.jsx';
import AnswerList from './Components/AnswerList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <SurveyList />,
        index: true
      },
      {
        path: "answerform/:id",
        element: <AnswerForm />,
      },
      {
        path: "answerlist/:id",
        element: <AnswerList />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
