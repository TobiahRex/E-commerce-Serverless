import React from 'react';
import Breadcrumb from '../../../../components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

export default function UserPrivacyPolicy() {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="privacy-policy--main">
      <div className="privacy-policy--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Privacy Policy"
        />
        <UserWelcomeMsg />
        <div className="privacy-policy__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="legal__title">
                <h1>Privacy Policy</h1>
              </div>

              <div className="legal__body">
                <p>
                  Your privacy is important to us. We have developed a privacy policy to help you understand what information we collect, how we use it, and what choices you have.
                  <br /><br />
                  What information do we collect?
                  <br />
                  <br />
                  We collect information in two ways:
                  <br />
                  1. When you give it to us or give us permission to obtain it. When you sign up for or use our products, you voluntarily give us certain information. This can include your name, address, phone number, email address you used to sign up, and any other information you provide us.
                  <br /><br />
                  2. We also get technical information when you use our products or use websites. These days, whenever you use a website, mobile application, or other Internet service, there’s certain information that almost always gets created and recorded automatically. The same is true when you use our products. Here are some of the types of information we collect:
                  * Log Data. When you use our webpage, our servers automatically record information (“log data”) including information that your browser sends whenever you visit a website or your mobile app sends when you’re using it. This log data may include your Internet Protocol address, the address of the web pages you visited that had Beyond Vape features, browser type and settings, the date and time of your request, how you used our website, and cookie data.
                  <br /><br />
                  * Cookie data. Depending on how you’re accessing our products, we may use “cookies” (a small text file sent by your computer each time you visit our website, unique to your Beyond Vape account or your browser), or similar technologies to record log data. When we use cookies, we may use “session” cookies (that last until you close your browser) or “persistent” cookies (that last until you or your browser delete them). For example, we may use cookies to store your language preferences or other settings so you don‘t have to set them up every time you visit. Some of the cookies we use are associated with your account (including personal information about you, such as the email address you gave us), and other cookies are not.
                  <br /><br />
                  * Device Information. In addition to log data, we may also collect information about the device you’re using our website on, including what type of device it is, what operating system you’re using, device settings, unique device identifiers, and crash data. Whether we collect some or all of this information often depends on what type of device you’re using and its settings. For example, different types of information are available depending on whether you’re using a Mac or a PC, or an iPhone or an Android phone. To learn more about what information your device makes available to us, please also check the policies of your device manufacturer or software provider.
                  <br /><br />
                  How do we use the information we collect?
                  <br /><br />
                  We use the information we collect to provide our products to you and make them better, develop new products, and protect our webiste and our users. For example, we may log how often people use two different versions of a product, which can help us understand which version is better.
                  <br /><br />
                  We also use the information we collect to:
                  <br /><br />
                  * Send you updates, newsletters, marketing materials and other information that may be of interest to you. For example, depending on your email notification settings, we may send you weekly updates. You can decide to stop getting these updates by updating your account settings (or through other settings we may provide).
                  <br /><br />
                  * Respond to your questions or comments.
                  <br /><br />
                  The information we collect may be “personally identifiable” (meaning it can be used to specifically identify you as a unique person) or “non-personally identifiable” (meaning it can’t be used to specifically identify you). We use both types of information, and combinations of both types, as described above. We may use or store information wherever Beyond Vape does business, including countries outside your own.
                  <br /><br />
                  What choices do you have about your information?
                  <br /><br />
                  Our goal is to give you simple and meaningful choices over your information. If you have an Beyond Vape account, many of the choices you have on our website are built directly into the product or your account settings. For example, you can:
                  <br /><br />
                  * Access and change information in your profile page at any time, choose whether your profile page is available to search engines, or choose whether others can find your Beyond Vape account using your email address;
                  <br /><br />
                  * Close your account at any time. When you close your account, we’ll deactivate it. We may retain archived copies of your information as required by law or for legitimate business purposes (including to help address fraud and spam).
                  <br /><br />
                  You may have choices available to you through the device or software you use to access Beyond Vape. For example:
                  <br /><br />
                  * The browser you use may provide you with the ability to control cookies or other types of local data storage;
                  <br /><br />
                  * Your mobile device may provide you with choices around how and whether location or other data is shared with us.
                  <br /><br />
                  To learn more about these choices, please see the information provided by the device or software provider.
                  <br /><br />
                  How do we share the information we collect?
                  <br /><br />
                  Pinterest is a tool people use to find their inspirations, make them a reality, and inspire others in the process. When you create public boards and pins, anyone can view them. You may also provide us with profile page information that that anyone can view. The other limited instances where we may share your personal information include:
                  <br /><br />
                  * We may employ third party companies or individuals to process personal information on our behalf based on our instructions and in compliance with this Privacy Policy. For example, we may share data with a security consultant to help us get better at identifying spam or with our accountants to make sure we’re keeping the books right. In addition, some of the information we request may be collected by third party providers on our behalf.
                  <br /><br />
                  * If we believe that disclosure is reasonably necessary to comply with a law, regulation or legal request; to protect the safety, rights, or property of the public, any person, or Beyond Vape; or to detect, prevent, or otherwise address fraud, security or technical issues.
                  <br /><br />
                  * We may engage in a merger, acquisition, bankruptcy, dissolution, reorganization, or similar transaction or proceeding that involves the transfer of the information described in this Policy.
                  <br /><br />
                  We may also share aggregated or non-personally identifiable information with our partners or others.
                  <br /><br />
                  How do we make changes to this policy?
                  <br /><br />
                  We may change this policy from time to time, and if we do we’ll post any changes on this page. If you continue to use our website after those changes are in effect, you agree to the revised policy. If the changes are significant, we may provide more prominent notice or obtain your consent as required by law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
