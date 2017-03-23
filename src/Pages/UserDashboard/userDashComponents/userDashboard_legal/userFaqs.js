import React from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

export default function UserPrivacyPolicy() {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="faqs--main">
      <div className="faqs--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="FAQ's"
        />
        <UserWelcomeMsg />
        <div className="faqs__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="legal__title">
                <h1>{'FAQ\'s'}</h1>
              </div>

              <div className="legal__body">
                <div className="question">
                  <h3>Why {'can\'t'} I buy more than 4 bottles?</h3>
                  <p>Japanese law requires no more than 120 mililiters of nicotine juice to be sold per individual,
                  per address, within 1 month.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
