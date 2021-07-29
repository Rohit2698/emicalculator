import "./App.css";
import EmiApplication from "./components/EmiApplication";
import { ContextProvider } from "./context/contextStore";

function App() {
  return (
    <ContextProvider>
      <EmiApplication />
    </ContextProvider>
  );
}

export default App;
