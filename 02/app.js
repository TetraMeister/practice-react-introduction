import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector('#root'));

const displayData = {
  text: 'Moja pierwsza strona w React',
  style: {
    background: 'linear-gradient(#e66465, #9198e5)',
    color: 'white',
    borderRadius: '15px',
    padding: '1.5em 1em',
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bold',
    margin: '1em',
    border: '2px dotted black'
  }
}

class HeaderCl extends React.Component {
  render() {
    const { text, style } = this.props.displayData;

    return (
      <header
        style={style}
      >
        {text}
      </header>
    )
  }
}

const HeaderFn = (props) => {
  const { text, style } = props.displayData;

  return (
    <header
      style={style}
    >
      {text}
    </header>
  )
}

root.render(
  <>
    <HeaderCl displayData={displayData} />
    <HeaderFn displayData={displayData} />
  </>
)