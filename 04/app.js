import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./../03/components/MenuItem"

const root = createRoot(document.querySelector('#root'));

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <MenuItem text="home" url="/" />
        <MenuItem text="kontakt" url="/contact" />
      </ul>
    )
  }
}

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Menu />
      </nav>
    )
  }
}

root.render(<Nav />)