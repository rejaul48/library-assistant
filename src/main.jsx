import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import ViewDetails from './components/ViewDetails/ViewDetails';
import { fetchDataFromApi } from './utility/fetchData.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage ></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: fetchDataFromApi
      },
      {
        path: '/listedBooks',
        element: <ListedBooks />,
        loader: fetchDataFromApi

      },
      {
        path: '/details/:bookId',
        element: <ViewDetails />,
        loader: fetchDataFromApi
      },
      {
        path: '/pageToRead',
        element: <PagesToRead />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
