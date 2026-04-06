import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector('#root'));

// const App = (props) => {
//   return (
//     <h1>
//       {props.text}
//     </h1>
//   )
// }

class App extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <h1>
        {text}
      </h1>
    )
  }
}

root.render(<App text="React Działa" />)