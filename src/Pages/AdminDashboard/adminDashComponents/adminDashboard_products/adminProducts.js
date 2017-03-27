import React, { PropTypes } from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminProducts({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="products--main">
      <div className="products--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Manage Login"
        />
        <AdminWelcomeMsg />
        <div className="products__body">
          <AdminSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">

              <div className="products__title">
                <h1>Products</h1>
              </div>

              <div className="products__body">

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AdminProducts.propTypes = propTypes;
export default AdminProducts;
