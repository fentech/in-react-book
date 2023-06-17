import React from "react";

interface Props {}

const ReactBook: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <header className="px-8 py-4 bg-blue-800">
        <h1 className="font-semibold text-lg text-white">ReactBook</h1>
      </header>
      <main className="p-10">{children}</main>
    </div>
  );
};

export default ReactBook;
