import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./components/MenuItem";

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
  render() {
    return (
      <ul>
        <MenuItem
          text="Kontakt"
          url="#contact"
        />
      </ul>
    )
  }
}

root.render(<App />)