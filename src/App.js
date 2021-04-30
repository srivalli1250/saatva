import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Home from './Home';

const App = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Questrial',
      h5: {
        fontFamily: 'Source Serif Pro'
      } ,
      h6:{
        fontSize: '14px'
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
