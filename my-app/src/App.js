import React from "react";

function App() {
  return (
    <Navbar>
      <li>X</li>
    </Navbar>
  );
}

function Navbar(props) {
  return(
    <nav classname="navbar">
      <ul classname="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

export default App;
