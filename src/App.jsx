import './App.css';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { darkTheme } from './utils/Themes';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <Body>portfolio</Body>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
