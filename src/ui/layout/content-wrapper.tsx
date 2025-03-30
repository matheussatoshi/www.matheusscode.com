import React from "react";

export function ContentWrapper({ children }: React.PropsWithChildren) {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col px-4 md:p-10">
      {children}
    </main>
  );
}
