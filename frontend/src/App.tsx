import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/HomePage.tsx";
import Layout from "./layout/Layout.tsx";
import ErrorPage from "@/pages/error/ErrorPage.tsx";

export default function App() {

  const router = createBrowserRouter([

      {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <HomePage/>
          }
        ]
      }
  ]);

  return <RouterProvider router={router}/>
}