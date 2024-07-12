import { Outlet } from "react-router-dom";
import SidePanel from "./SidePanel";
import Navbar from "./Navbar";
import { useState } from "react";

function Layout() {
  const [isCollapsed, setisCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", position: "relative", width: "100%",maxWidth:"100vw",overflow: "hidden" }}>
      <SidePanel isCollapsed={isCollapsed} setIsCollapsed={setisCollapsed} />
      <div style={{ minHeight: "100vh", minWidth:`${isCollapsed ? "100px" : "260px"}`,width: `${isCollapsed ? "10%" : "15%"}` }}></div>
      <main
        style={{ minHeight: "100vh", width:`${!isCollapsed ? "85%" : "90%"}` ,padding: "20px",transition: "width 0.5s"}}
      >
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
