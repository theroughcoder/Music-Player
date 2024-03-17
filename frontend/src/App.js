import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './view/home';
import Layout from './layout/layout';
import { createTheme, ThemeProvider } from '@mui/material';



function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#00b8d4',
      },
    },
  });
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // other pages....

      ],
    },
  ])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
