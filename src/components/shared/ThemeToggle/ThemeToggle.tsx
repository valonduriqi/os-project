import { Switch } from "@headlessui/react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const ThemeToggle = ({
  isDarkMode,
  setIsDarkMode,
}: ThemeToggleProps) => {
  return (
    <div>
      <Switch
        checked={isDarkMode}
        onChange={setIsDarkMode}
        className={`${isDarkMode ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
      >
        <span
          aria-hidden="true"
          className={`${isDarkMode ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[28px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};
