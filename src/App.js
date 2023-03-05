// import Usestate from './components/Usestate';
import { useState } from "react";
import Useeffect from "./components/useEffect/useEffect/Useeffect";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {/* <Usestate/> */}
      <button onClick={() => setShow((show) => !show)}>
        {show ? "Göster" : "Gizle"}
      </button>
      {show && <Useeffect />}
    </div>
  );
}

export default App;
