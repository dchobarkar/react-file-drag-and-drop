import { DragEvent, PropsWithChildren } from "react";

type DragAndDropPadProps = {
  className?: string;
  onFileDropped: (files: Array<File>) => void;
};

export const DragAndDropPad = ({
  className,
  children,
  onFileDropped,
}: PropsWithChildren<DragAndDropPadProps>) => {
  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();

    const items = event.dataTransfer.items;
    const files = event.dataTransfer.files;

    if (items) processItems([...items]);
    else processFiles([...files]);
  }

  function processItems(items: Array<DataTransferItem>) {
    const files = items
      .filter((item) => item.kind === "file")
      .map((item) => item.getAsFile())
      .filter((file): file is File => file !== null);

    processFiles(files);
  }

  function processFiles(files: Array<File>) {
    onFileDropped(files);
  }

  function onDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  return (
    <div className={className} onDragOver={onDragOver} onDrop={onDrop}>
      {children}
    </div>
  );
};
