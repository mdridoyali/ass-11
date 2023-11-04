import { Outlet } from "react-router-dom";
import "./App.css";
import MainLayout from "./Components/MainLayout";

function App() {
  return (
    <div className="h-[100vh]">
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </div>
  );
}

export default App;
