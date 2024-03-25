import Filters from "./Components/Filters.jsx"
import Main from "./Components/Main.jsx"
import Cart from "./Components/Cart.jsx"
import { createGlobalStyle } from "styled-components";
import { Div } from './appStyle.js'

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-bos;
  }
`
function App() {

  return (
    <Div>
      <GlobalStyled />
      <Filters />
      <Main />
      <Cart />
    </Div>
  );
}

export default App;
