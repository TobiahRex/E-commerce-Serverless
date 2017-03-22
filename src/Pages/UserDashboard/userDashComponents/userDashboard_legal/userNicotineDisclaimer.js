import React from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
