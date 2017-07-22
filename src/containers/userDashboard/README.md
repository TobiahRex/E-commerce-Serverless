## DESCRIPTION:
User Dashboard has many levels.  Anywhere a link exists throughout the site that refers to specific information only found under the users profile, will redirect them to that respective page, within their dashboard.  Below is a list of such redirects.

  1. _Tracking #: <Number>_ Redirects to `/user_:id/order_:orderid/tracking_:trackingid`
    - _userOrderTracking.js_ is the respective view.  The link is found at their Order Success page inside the invoice table && within their Emails in their invoice information.

    NOTES: _orderTracking.js_ is for Guests who want to track their order but do not have an account.  They would be redirected to `/iamges/tracking_:tracking_id` from their invoice email.
