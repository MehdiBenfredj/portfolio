import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Socials from "./components/Socials";

function App() {

  return (
    <div>
      <div className="min-h-screen bg-vscode-blue mx-auto flex flex-col">
        <Navbar />
        <Outlet></Outlet>
        <Socials></Socials>
      </div>
    </div>
  );
}

export default App;
