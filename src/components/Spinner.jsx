import React from "react";

function Spinner() {
  return (
    <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
    <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to bg-pink-500 rounded-full animate-spin" />
        <div className="w-full h-1/2 bg-white/10 absolute" />
      </div>

  );
}

export default Spinner;
