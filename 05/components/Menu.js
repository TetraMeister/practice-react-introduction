import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
  render() {
    const linksList = this.props.linksList

    return (
      <ul>
        {linksList.map((el) => {
          return (
            <MenuItem
              key={el.url}
              text={el.text}
              url={el.url}
            />
          )
        })}
      </ul>
    )
  }
}

Menu.defaultProps = {
  linksList: [{ text: 'Błąd ładowania linków', url: '/' }]
}

Menu.propTypes = {
  linksList: PropTypes.array.isRequired
}

export default Menu