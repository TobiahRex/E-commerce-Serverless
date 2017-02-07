import React, { PropTypes } from 'react';
import Navbar from './Pages/Navbar/navbarComponents/navbarMain';

const App = ({ children }) => (
  <div>
    <Navbar />
    <section>
      {children}
    </section>
    <footer />
  </div>
);

App.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};

export default App;
