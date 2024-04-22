import ListQuestions from "./Components/ListQuestions";
import SurveyList from "./Components/SurveyList";
import { Outlet } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#a7b788',
    },
    text: {
      primary: '#003049',
      secondary: '#4c87a0',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
