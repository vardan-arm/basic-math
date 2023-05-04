import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home.tsx";
import MultiplicationAndDivision from "./pages/multiplicationAndDivision.tsx";
import GlobalStyle from "./styles/globalStyle.tsx";


const router = createBrowserRouter([{
  path: '/',
  element: <Home />
}, {
  path: '/category1',
  element: <MultiplicationAndDivision />
}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    {/*<RENAMED_App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
