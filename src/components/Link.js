import React, { Component } from 'react';

class Link extends Component {
  render() {
    const { children, active, setFilter } = this.props;
    const isActive = active ? 'active' : null;
    return (
      <button className={ isActive } onClick={ setFilter }>{ children }</button>
    )
  }
}

export default Link;