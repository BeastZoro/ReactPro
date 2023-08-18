import Header from "./components/Header";
import Pages from './pages/Pages'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
  );
}

export default App;
