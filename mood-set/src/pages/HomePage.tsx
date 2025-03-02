import React from "react";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800">
      <div className="flex flex-col items-center space-y-4">
        {/* Yellow circle */}
        <div className="w-12 h-12 rounded-full bg-[#E2E279]" />

        {/* White bars */}
        <div className="space-y-2">
          <div className="h-4 w-48 bg-white rounded" />
          <div className="h-4 w-48 bg-white rounded" />
        </div>

        {/* Gray bar */}
        <div className="h-4 w-36 bg-zinc-600 rounded" />

        {/* Three dots */}
        <div className="flex space-x-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
};
