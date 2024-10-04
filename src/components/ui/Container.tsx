import { ReactNode } from "react";

type TcontainerProps = {
  children: ReactNode;
};

export default function Container({ children }: TcontainerProps) {
  return <div className="w-full max-w-7xl mx-auto h-screen">{children}</div>;
}
