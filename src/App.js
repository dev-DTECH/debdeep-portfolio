import './App.scss';
import NavBar from "./component/NavBar";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Landing from "./component/Landing";

const theme = createTheme({
    palette: {
        primary1: {
            main: "#FF6600",
        },
        primary2: {
            main: "#00aa88",
        },
        grey: {
            main: "#424242",
            light: "#616161",
            dark: "#212121",
            contrastText: '#fff'
        }
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <NavBar/>
                <Landing/>
            </div>
        </ThemeProvider>
    );
}

export default App;
