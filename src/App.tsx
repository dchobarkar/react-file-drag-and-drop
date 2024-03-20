import { DragAndDropPad } from "./components/drag-and-drop";
import "./App.css";

function App() {
  return (
    <div className="app">
      <DragAndDropPad className="drag-and-drop">
        <p className="drop-hint">Drop files here</p>
      </DragAndDropPad>
    </div>
  );
}

export default App;
