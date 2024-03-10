import React from "react";

export function renderIcon(icon: JSX.Element, style: string) {
  return (
    <div className={`flex justify-center items-center w-10 h-10 rounded-lg cursor-pointer ${style}`}>
      {icon}
    </div>
  );
}
