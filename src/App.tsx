import { useState } from "react";

import { DragAndDropPad } from "./components/drag-and-drop";
import { FileList } from "./components/file-list";
import { Gallery } from "./components/gallery";
import "./App.css";

function App() {
  const [files, setFiles] = useState<Array<File>>([]);
  const [imageUrls, setImageUrls] = useState<Array<string>>([]);

  function onFilesDropped(newFiles: Array<File>) {
    setFiles(newFiles);

    const urls = newFiles
      .filter((file) => file.type === "image/jpeg")
      .map((file) => URL.createObjectURL(file));

    setImageUrls(urls);
  }

  return (
    <div className="app">
      <DragAndDropPad onFilesDropped={onFilesDropped} className="drag-and-drop">
        <p className="drop-hint">Drop files here</p>
      </DragAndDropPad>

      <FileList files={files} />

      <Gallery imageUrls={imageUrls} />
    </div>
  );
}

export default App;
