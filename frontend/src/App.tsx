import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/HomePage.tsx";
import Layout from "./layout/Layout.tsx";
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import InvoiceUploadPage from "@/pages/upload/InvoiceUploadPage.tsx";

export default function App() {

  const router = createBrowserRouter([

      {
        path: "/",
        element: <Layout/>,
        errorElement: <Layout isError={true}/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/upload",
                element: <InvoiceUploadPage/>
            }
        ]
      }
  ]);

  return (
      <MantineProvider>
        <RouterProvider router={router}/>
      </MantineProvider>
  );
}