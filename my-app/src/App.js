import React from "react";

function App() {
  return(
    <Navbar>
      <div className="navbar-nav">
      <Navitem icon="🔥"/>
      <Navitem icon="🀄️"/>
      <Navitem icon="🎴"/>
       </div>
    </Navbar>
  );
}
function Navbar(props) {
  return(
    <nav className="navbar">
      <ul classname="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function Navitem(props){
  return(
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}

export default App;
