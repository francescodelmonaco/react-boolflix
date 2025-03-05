// components
import { Header } from "./components/Header";
import { Main } from "./components/Main";

// contexts
import { GlobalProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Main />
      </GlobalProvider>
    </>
  )
};

export default App;