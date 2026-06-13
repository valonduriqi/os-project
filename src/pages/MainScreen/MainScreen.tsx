import { MenuBar } from "@components/MainScreen/MenuBar/MenuBar";
import { ApplicationsSection } from "@components/MainScreen/ApplicationsSection/ApplicationsSection";
import { ThemeProvider } from "@context/ThemeContext/ThemeContext";

export const MainScreen = () => {
  return (
    <div className="flex flex-col w-full">
      <MenuBar />
      <div className="flex flex-col flex-1 p-5">
        <ApplicationsSection />
      </div>
    </div>
  );
};
