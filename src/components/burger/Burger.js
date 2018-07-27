import React from 'react';

import './style.css';

class Burger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  toggleClass = () => {
    const currentState = this.state.toggle;
    this.setState({
      toggle: !currentState
    });
  };

  render() {
    //
    const toggle = this.state.toggle ? 'clickMenuEight' : null;
    const classes = `${toggle} menuEight`;

    return (
      <div className={classes} onClick={this.toggleClass}>
        <span />
        <span />
        <span />
      </div>
    );
  }
}

export default Burger;
