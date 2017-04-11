import React from 'react';
import FontAwesome from 'react-fontawesome';

import Breadcrumb from '../../../../components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

export default function AdminPrivacyPolicy() {
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
        <AdminWelcomeMsg />
        <div className="faqs__body">
          <div className="body__sidebars">
            <AdminSideBar location={location} />
            <AdminSideBar.Sales location={location} />
            <AdminSideBar.Members location={location} />
          </div>
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="legal__title">
                <h1>{'FAQ\'s'}</h1>
              </div>

              <div className="legal__body">
                <ul className="faq-list">
                  <li className="list--faq ">
                    <div className="faq-question">
                      <h3>Why {'can\'t'} I buy more than 4 bottles?</h3>
                      <p>Japanese law requires no more than 120 mililiters of nicotine juice to be sold per individual,
                      per address, within 1 month.</p>
                      <div className="edit-btn">
                        <button className="small-edit-btn sweep-right">Edit</button>
                      </div>
                    </div>
                    <div className="faq-question--edit">
                      <input className="edit_title" type="text" value={'Why can\'t I buy more than 4 bottles?'} />
                      <textarea
                        cols="100"
                        rows="7"
                        required
                        value={'Japanese law requires no more than 120 mililiters of nicotine juice to be sold per individual, per address, within 1 month.'}
                      />
                      <div className="save__action-section--container">
                        <div className="action-section__save-btn">
                          <button className="save-btn small-btn sweep-right">
                            Save
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <FontAwesome name="refresh" spin />
                            {'\u00A0'} Saving...
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <span className="flex-btn-parent">
                              <FontAwesome name="check-circle" />
                              {'\u00A0'} Saved!
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list--faq">
                    <div className="faq-question">
                      <h3>What address should I use if {'I\'m'} SOFA and live on a military base?</h3>
                      <p>Many of our SOFA sponsored members use friends addresses who live off base.  Alternatively, every building (including the post office on base) has a Japanese address on military bases in Japan. We recommend you ask your post office for their Japanese {('“off-base”')} address and then you can use your postal box # to have the package assigned to your postal box and receive your juice.</p>
                      <div className="edit-btn">
                        <button className="small-edit-btn sweep-right">Edit</button>
                      </div>
                      <div className="save__action-section--container">
                        <div className="action-section__save-btn">
                          <button className="save-btn small-btn sweep-right">
                            Save
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <FontAwesome name="refresh" spin />
                            {'\u00A0'} Saving...
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <span className="flex-btn-parent">
                              <FontAwesome name="check-circle" />
                              {'\u00A0'} Saved!
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="faq-question--edit">
                      <input className="edit_title" type="text" value={'What address should I use if I\'m SOFA and live on a military base?'} />
                      <textarea
                        cols="100"
                        rows="7"
                        required
                        value={'Many of our SOFA sponsored members use friends addresses who live off base.  Alternatively, every building (including the post office on base) has a Japanese address on military bases in Japan. We recommend you ask your post office for their Japanese "off-base" address and then you can use your postal box # to have the package assigned to your postal box and receive your juice.'}
                      />
                      <div className="save__action-section--container">
                        <div className="action-section__save-btn">
                          <button className="save-btn small-btn sweep-right">
                            Save
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <FontAwesome name="refresh" spin />
                            {'\u00A0'} Saving...
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <span className="flex-btn-parent">
                              <FontAwesome name="check-circle" />
                              {'\u00A0'} Saved!
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list--faq">
                    <div className="faq-question">
                      <h3>When will you get more flavors?</h3>
                      <p>Our flavor inventory will be expanding in the coming months. {'We\'ve'} currently partnered with VapeSwitch @ <a href="http://www.vapeswitch.com">www.vapeswitch.com</a> and offer their 6 delicious falvors as we launch our business.  Their juices are made at the #1 ranked e-juice factory in the World at <i>Molecule Labs</i>. {'We\'re'} supremely confident you will find these 6 flavors totally addicting.  Stay tuned for newletter updates for future additional e-juices.</p>
                      <div className="edit-btn">
                        <button className="small-edit-btn sweep-right">Edit</button>
                      </div>
                      <div className="save__action-section--container">
                        <div className="action-section__save-btn">
                          <button className="save-btn small-btn sweep-right">
                            Save
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <FontAwesome name="refresh" spin />
                            {'\u00A0'} Saving...
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <span className="flex-btn-parent">
                              <FontAwesome name="check-circle" />
                              {'\u00A0'} Saved!
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="faq-question--edit">
                      <input className="edit_title" type="text" value={'When will you get more flavors?'} />
                      <textarea
                        cols="100"
                        rows="7"
                        required
                        value={'Our flavor inventory will be expanding in the coming months. We\'ve currently partnered with VapeSwitch @ <a href="http://www.vapeswitch.com">www.vapeswitch.com</a> and offer their 6 delicious falvors as we launch our business.  Their juices are made at the #1 ranked e-juice factory in the World at <i>Molecule Labs</i>. We\'re supremely confident you will find these 6 flavors totally addicting.  Stay tuned for newletter updates for future additional e-juices.'}
                      />
                      <div className="save__action-section--container">
                        <div className="action-section__save-btn">
                          <button className="save-btn small-btn sweep-right">
                            Save
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <FontAwesome name="refresh" spin />
                            {'\u00A0'} Saving...
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <span className="flex-btn-parent">
                              <FontAwesome name="check-circle" />
                              {'\u00A0'} Saved!
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list--faq">
                    <div className="faq-question">
                      <h3>Why do you only sell vape juice and not all vape equipment & accessories?</h3>
                      <p>We specialize in delivering nicotine vape juice to Japan faster than ANY competition in Japan. {'We\'re'} highly committed and devoted to performing this highly rare and difficult task to the best of our ability and therefore devote 100% of our resources and attention to that.  We recommend purchasing all your vaping gear and needed accessories at our {'partners\''} website <a href="http://www.vapeswitch.com">www.vapeswitch.com</a></p>
                      <div className="edit-btn">
                        <button className="small-edit-btn sweep-right">Edit</button>
                      </div>
                      <div className="save__action-section--container">
                        <div className="action-section__save-btn">
                          <button className="save-btn small-btn sweep-right">
                            Save
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <FontAwesome name="refresh" spin />
                            {'\u00A0'} Saving...
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <span className="flex-btn-parent">
                              <FontAwesome name="check-circle" />
                              {'\u00A0'} Saved!
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="faq-question--edit">
                      <input className="edit_title" type="text" value={'Why do you only sell vape juice and not all vape equipment & accessories?'} />
                      <textarea
                        cols="100"
                        rows="7"
                        required
                        value={'We specialize in delivering nicotine vape juice to Japan faster than ANY competition in Japan. We\'re highly committed and devoted to performing this highly rare and difficult task to the best of our ability and therefore devote 100% of our resources and attention to that.  We recommend purchasing all your vaping gear and needed accessories at our partners\' website <a href="http://www.vapeswitch.com">www.vapeswitch.com</a>'}
                      />
                      <div className="save__action-section--container">
                        <div className="action-section__save-btn">
                          <button className="save-btn small-btn sweep-right">
                            Save
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <FontAwesome name="refresh" spin />
                            {'\u00A0'} Saving...
                          </button>
                        </div>
                        <div>
                          <button className="save-btn small-flex-btn sweep-right">
                            <span className="flex-btn-parent">
                              <FontAwesome name="check-circle" />
                              {'\u00A0'} Saved!
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="legal__body action-section">
                  <button className="back-btn primary-flex-button sweep-right">
                    <span className="flex-btn-parent">
                      <FontAwesome name="angle-double-left" />
                      {'\u00A0'}
                      Back
                    </span>
                  </button>
                  <button className="primary-button sweep-right">
                    Add FAQ
                  </button>
                </div>
              </div>

              <div className="legal__modal">
                <div className="modal--faq--add">
                  <div className="faq__msg--container">
                    <div className="msg__title admin-dash__small-title">
                      <h3 className="">New FAQ</h3>
                    </div>
                    <div className="msg__body">
                      <label htmlFor="faq--title">Title</label>
                      <input id="faq--title" type="text" value="New FAQ" />
                      <label htmlFor="faq--body">Body</label>
                      <textarea id="faq--body" cols="30" rows="10" value="FAQ body here..." />
                    </div>
                    <div className="action-section">
                      <button className="medium-size-btn sweep-right">
                        Cancel
                      </button>
                      <button className="medium-size-btn sweep-right">
                        Save
                      </button>
                    </div>
                  </div>
                </div>

                <div className="modal--faq--delete">
                  <div className="faq__delete--container">
                    <div className="msg__title admin-dash__small-title">
                      <h3 className="">Delete FAQ?</h3>
                    </div>
                    <div className="msg__body">
                      <p>Are you sure you want to delete this FAQ?</p>
                      <div className="action-section">
                        <button className="medium-size-btn sweep-right">
                          Cancel
                        </button>
                        <button className="medium-size-btn sweep-right">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="faq__success--container">
                    <div className="msg__title admin-dash__small-title">
                      <h3 className="">Deleted!</h3>
                    </div>
                    <div className="msg__body">
                      <p>FAQ is successfully deleted!</p>
                      <div className="action-section">
                        <button className="medium-size-btn sweep-right">
                          OK
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
