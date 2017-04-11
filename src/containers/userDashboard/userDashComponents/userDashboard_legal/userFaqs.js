import React from 'react';
import Breadcrumb from '../../../../components/breadcrumbs';
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
                <div className="faq-question">
                  <h3>Why {'can\'t'} I buy more than 4 bottles?</h3>
                  <p>Japanese law requires no more than 120 mililiters of nicotine juice to be sold per individual,
                  per address, within 1 month.</p>
                </div>
                <div className="faq-question">
                  <h3>What address should I use if {'I\'m'} SOFA and live on a military base?</h3>
                  <p>Many of our SOFA sponsored members use friends addresses who live off base.  Alternatively, every building (including the post office on base) has a Japanese address on military bases in Japan. We recommend you ask your post office for their Japanese {('“off-base”')} address and then you can use your postal box # to have the package assigned to your postal box and receive your juice.</p>
                </div>
                <div className="faq-question">
                  <h3>When will you get more flavors?</h3>
                  <p>Our flavor inventory will be expanding in the coming months. {'We\'ve'} currently partnered with VapeSwitch @ <a href="http://www.vapeswitch.com">www.vapeswitch.com</a> and offer their 6 delicious falvors as we launch our business.  Their juices are made at the #1 ranked e-juice factory in the World at <i>Molecule Labs</i>. {'We\'re'} supremely confident you will find these 6 flavors totally addicting.  Stay tuned for newletter updates for future additional e-juices.</p>
                </div>
                <div className="faq-question">
                  <h3>Why do you only sell vape juice and not all vape equipment & accessories?</h3>
                  <p>We specialize in delivering nicotine vape juice to Japan faster than ANY competition in Japan. {'We\'re'} highly committed and devoted to performing this highly rare and difficult task to the best of our ability and therefore devote 100% of our resources and attention to that.  We recommend purchasing all your vaping gear and needed accessories at our {'partners\''} website <a href="http://www.vapeswitch.com">www.vapeswitch.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
