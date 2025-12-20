import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import './index.css'
import { ContextProvider } from './context/ContextProvider.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useStateContext } from './context/ContextProvider.jsx';

const App = () => {
  const { themeMode } = useStateContext();

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
