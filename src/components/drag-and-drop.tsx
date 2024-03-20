import { DragEvent, PropsWithChildren } from "react";

type DragAndDropPadProps = {
  className?: string;
};

export const DragAndDropPad = ({
  className,
  children,
}: PropsWithChildren<DragAndDropPadProps>) => {
  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    console.log(event);
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
