import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className="flex">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
            <Sidebar activeMenu={activeMenu} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-5 py-4">{children}</main>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
