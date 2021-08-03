import './App.css';
import SideMenu from "../Components/SideMenu";
import {createTheme, CssBaseline, makeStyles, MuiThemeProvider} from "@material-ui/core";
import Header from "../Components/Header";
import Employee from "../Pages/Employee/Employee";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333669",
      light: "#3c44b126"
    },
    secondary: {
      main: '#f83245',
      light: '#f832456'
    },
    background: {
      default: "#f4f5fd"
    }
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)"
      }
    }
    
  },
  props: {
    MuiIconButton: {}
  }
})

const useStyle = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  }
})

function App() {
  const classes = useStyle()
  return (
    <MuiThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        
        <Employee/>
      </div>
      <CssBaseline/>
    </MuiThemeProvider>
  );
}

export default App;
