import { Outlet } from "react-router";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div>
      <Header></Header>
      <main className="overflow-x-clip">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
