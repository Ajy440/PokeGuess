import { useState } from "react";
import Splash from "./components/Splash";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [isSplash, setSplash] = useState(true);

  return (
    <div className="App">
      {isSplash ? <Splash onContinue={setSplash} /> : <Main />}
    </div>
  );
}

export default App;
