import { DragAndDropPad } from "./components/drag-and-drop";
import "./App.css";
import { useState } from "react";
import { FileList } from "./components/file-list";
import { Gallery } from "./components/gallery";

function App() {
  const [files, setFiles] = useState<Array<File>>([]);
  const [imageUrls, setImageUrls] = useState<Array<string>>([]);

  function onFileDropped(newFiles: Array<File>) {
    setFiles(newFiles);
    const urls = newFiles
      .filter((file) => file.type === "image/jpeg")
      .map((file) => URL.createObjectURL(file));

    setImageUrls(urls);
  }

  return (
    <div className="app">
      <DragAndDropPad className="drag-and-drop" onFileDropped={onFileDropped}>
        <p className="drop-hint">Drop files here</p>
      </DragAndDropPad>
      <FileList files={files} />
      <Gallery imageUrls={imageUrls} />
    </div>
  );
}

export default App;
