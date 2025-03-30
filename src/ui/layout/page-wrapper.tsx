import React from "react";

export function PageWrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-start bg-[#05050570] pt-12 md:pt-24 md:pb-12">
      {children}
    </div>
  );
}
