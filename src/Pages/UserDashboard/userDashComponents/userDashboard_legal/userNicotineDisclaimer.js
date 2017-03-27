import React from 'react';
import FontAwesome from 'react-fontawesome';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

// TODO:  This form is automatically saved as "Agreed" since every visitor to the site must Confirm they are at least 18yrs of age.

export default function UserNicotineDiclaimer() {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="nicotine--main">
      <div className="nicotine--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Nicotine Disclaimer"
        />
        <UserWelcomeMsg />
        <div className="nicotine__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="legal__title">
                <h1>Nicotine Disclaimer</h1>
              </div>
              <div className="legal__body">
                <p>WARNING: Products sold by Nic Juice 2 Japan contains nicotine, a chemical known to the state of California to cause birth defects or other reproductive harm. Nic Juice 2 Japan products are intended for use by smokers 18 years of age or older (21 where applicable). You must be of legal smoking age in your area to purchase and/or use our products. Products sold by Nic Juice 2 Japan are not intended for use by children, women who are pregnant or breast feeding, or by those who are at risk of heart disease, high blood pressure, diabetes, or are taking medication for depression or asthma. Do not use these products if you are sensitive or allergic to nicotine or the additive propylene glycol. This product is sold for recreational use only. Products sold by Nic Juice 2 Japan are not intended to diagnose, treat or prevent any condition, disorder, disease or other conditions are not a smoking cessation method and have not tested as such. Nicotine is extremely addictive and habit forming. Keep out of reach of children and pets. Products within this site have not been evaluated by the US Food and Drug Administration (FDA) or any international health organization.
                </p>
              </div>
              <div className="user__agree">
                <button type="text" className="user-input__check-box" disabled>
                  <span className="flex-btn-parent">
                    <FontAwesome className="nicotine-agree-plus" name="plus" />
                  </span>
                </button>
                <p>I am legal Smoking Age.</p>
              </div>
              <div className="legal__action-section--container">
                <div className="action-section__back-btn">
                  <button className="back-btn primary-flex-button sweep-right">
                    <span className="flex-parent-btn">
                      <FontAwesome name="angle-double-left" />
                      {'\u00A0'}
                      Back
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
