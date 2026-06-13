import { ThemeToggle } from "@components/shared/ThemeToggle/ThemeToggle";
import { useState } from "react";

export const Preferences = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  console.log(isDarkMode);
  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto">
      <h1 className="w-full text-4xl font-bold text-left mb-5">Preferences</h1>
      <div className="flex flex-row items-start align-middle gap-5">
        <p className="text-lg ">DarkMode</p>
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
    </div>
  );
};
