import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import {ReactComponent as ProfileIcon} from "./icons/profile.svg";
import {ReactComponent as ChevronIcon} from "./icons/chevron.svg";
import {ReactComponent as BellIcon} from "./icons/bell.svg";
import {ReactComponent as SettingsIcon} from "./icons/settings.svg";
import {ReactComponent as ArrowIcon} from "./icons/left-arrow.svg";
import {ReactComponent as PlusIcon} from "./icons/plus.svg";
import {ReactComponent as DowloadIcon} from "./icons/download.svg";
import {ReactComponent as CaretIcon} from "./icons/caret.svg";

function App() {
  return(
    <Navbar>
      <div className="navbar-nav">
        <Navitem icon={<PlusIcon  />}/>
        <Navitem icon={<BellIcon />}/>
        <Navitem icon={<DowloadIcon />}/>
        <Navitem icon={<CaretIcon />}>
          <DropdownMenu className="menu-item"/>
        </Navitem>
      </div>
    </Navbar>
  );
}

//Handles the dropdown menu and the items inside said menu
function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');

  //Handles the items inside the dropdown menu
  function DropdownItem(props) {
    return(
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        
        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  //Creates a dropdown menu. The first CSSTransition block refers to the menu when pressing the caret button
  //The second CSSTransition block refers to the menu when pressing the settings button
  return(
    <div className="dropdown">
      <CSSTransition 
      in={activeMenu === 'main'} 
      unmountOnExit timeout={500} 
      classNames="menu-primary"
      >
        <div classname="menu">
          <DropdownItem leftIcon={<ProfileIcon/>}>My Profile</DropdownItem>
          <DropdownItem leftIcon={<SettingsIcon/>} rightIcon={<ChevronIcon/>} goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem>filler1</DropdownItem>
          <DropdownItem>filler2</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
      in={activeMenu === 'settings'} 
      unmountOnExit timeout={500} 
      classNames="menu-secondary"
      >
        <div classname="menu">
          <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main">Back</DropdownItem>
          <DropdownItem>filler1</DropdownItem>
          <DropdownItem>filler2</DropdownItem>
          <DropdownItem>filler3</DropdownItem>
          <DropdownItem>filler4</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

//Creates a navagational bar at the top of the window to house the menu
function Navbar(props) {
  return(
    <nav className="navbar">
      <ul classname="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

//Handles the buttons inside of the navbar
function Navitem(props){

  const [open, setOpen] = useState(false);

  return(
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}

    </li>
  );
}

export default App;