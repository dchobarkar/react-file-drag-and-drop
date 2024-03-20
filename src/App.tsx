import { DragAndDropPad } from "./components/drag-and-drop";
import "./App.css";
import { useState } from "react";
import { FileList } from "./components/file-list";

function App() {
  const [files, setFiles] = useState<Array<File>>([]);

  function onFileDropped(files: Array<File>) {
    setFiles(files);
  }

  return (
    <div className="app">
      <DragAndDropPad className="drag-and-drop" onFileDropped={onFileDropped}>
        <p className="drop-hint">Drop files here</p>
      </DragAndDropPad>
      <FileList files={files} />
    </div>
  );
}

export default App;
