import React from "react";

import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNavbar />
      <div className="root-container">
        <div className="wrapper">
            { children }
        </div>
      </div>
    </main>
  )
}

export default Layout