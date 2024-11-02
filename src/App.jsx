import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Socials from "./components/Socials";
import { useMediaQuery } from "react-responsive";
import { LoaderCircle } from "lucide-react";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      {!isTabletOrMobile && (
        <div className="min-h-screen bg-vscode-blue mx-auto flex items-center">
          <Navbar />
          <Outlet></Outlet>
          <Socials></Socials>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="flex flex-col min-h-screen bg-vscode-blue mx-auto items-center justify-center">
          <div className="pb-8" style={{ color: "#10B981" }}>
            <LoaderCircle className="animate-spin " size={48} />
          </div>
          <p className="font-sans text-xl text-name-color font-bold pb-8 ">
            Welcome to my personal website
          </p>
          <p>Mobile version coming soon</p>
          <p className="pt-8">Meanwhile, please browse on desktop!</p>
          <p className="pt-8">contact@mehdibenfredj.com</p>
          <Socials></Socials>
        </div>
      )}
    </div>
  );
}

export default App;
