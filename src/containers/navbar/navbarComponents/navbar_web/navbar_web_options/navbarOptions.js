import React from 'react';
/* TODO:
1. Pass down via props the respective class methods shown below.
- Lang change: Will set a flag in state that all SMART components will be receiving to determine how to render the language info.

- Currency Change: <Same as lang change.>

*/

export default function NavbarOptions() {
  return (
    <div className="navbar-actionSection-upper-options">
      {this.props.children}
    </div>
  );
}
