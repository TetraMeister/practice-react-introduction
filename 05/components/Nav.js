import React from "react";
import Menu from "./Menu";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Menu linksList={[{ text: 'home', url: '/' }, { text: 'kontakt', url: '/contact' }]} />
      </nav>
    )
  }
}

export default Nav