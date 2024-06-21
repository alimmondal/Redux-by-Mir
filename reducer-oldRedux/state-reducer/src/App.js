import { createContext } from "react";
import "./App.css";
import LongForm from "./pages/LongForm";

export const COUNTER_CONTEXT = createContext();

function App() {
  // const [count, setCount] = useState(0);
  // const value = { count, setCount };

  return (
    // <COUNTER_CONTEXT.Provider value={value}>
    <div className="App">
      <LongForm />
      {/* <ShortForm /> */}
      {/* <Counter /> */}
    </div>
    // </COUNTER_CONTEXT.Provider>
  );
}

export default App;
