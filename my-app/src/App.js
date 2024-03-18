import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Sidebar from "./sidebar.jsx";
import StickyNavbar from "./navbar.jsx";
import "./App.css"
import Rightnav from "./rightsmallnav.jsx";
import Righnavforward from "./rightNavforward.jsx";
import Rightnavhamburger from "./rightnavHamburger.jsx";
import RightnavFilter from "./rightnavFilter.jsx";
function App() {

//   const navigate = useNavigate();

//  const handleNavigation = (path) => {
//     navigate(path);
//  };

  return (
    <Router>
      
      <div style={{ display: "flex", alignItems: "start", gap: "20px", position: "fixed", minWidth: "100vw"}}>
        
        {/* Flexbox container with gap */}
        <Sidebar />
        <StickyNavbar />
      </div>

      <Routes>
        <Route path="/Ellipsis" element={<Rightnav />} />
        {/* Add other routes as needed */}
        
        <Route path="/forwardfill" element={<Righnavforward />} />
        <Route path="/linkfill" element={<RightnavFilter />} />
        <Route path="/hamburgerfill" element={<Rightnavhamburger />} />
      </Routes>

      {/* <ul>
 <li onClick={() => handleNavigation('/Ellipsis')}>Ellipsis</li>
 <li onClick={() => handleNavigation('/linkfill')}>Link_filter</li>
 <li onClick={() => handleNavigation('/forwardfill')}>Forward</li>
 <li onClick={() => handleNavigation('/hamburgerfill')}>Hamburger</li>
</ul> */}

    </Router>
  );
}

export default App;
