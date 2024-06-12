import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      {children}
    </div>
  );
};

export default layout;
