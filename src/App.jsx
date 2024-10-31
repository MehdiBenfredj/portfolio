import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="min-h-screen bg-vscode-blue mx-auto flex items-center">
      <Navbar />
      <Outlet></Outlet>
      <Socials></Socials>
    </div>
  );
}

export default App;
