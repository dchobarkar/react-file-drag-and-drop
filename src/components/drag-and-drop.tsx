import { PropsWithChildren } from "react";

type DragAndDropPadProps = {
  className?: string;
};

export const DragAndDropPad = ({
  className,
  children,
}: PropsWithChildren<DragAndDropPadProps>) => {
  return <div className={className}>{children}</div>;
};
