import React from 'react';
import {
  HdrPage,
  BreadCrumb,
} from './components';

export default function ShippingPolicy({ intl }) {
  const {
    messages: {
      'legal.breadCrumb.paths1': bcPaths1,
      'legal.breadCrumb.lastCrumb': lastCrumb,
      'legal.policy.shipping.title': header,
    },
  } = intl;
  return (
    <div className="shipping-policy__main">
      <BreadCrumb
        paths={[bcPaths1]}
        classes={['home']}
        destination={['']}
        lastCrumb={lastCrumb}
      />
      <HdrPage header={header} />
      <br />
      <div className="main__body">
        <p>
          <h4>ORDER PROCESSING & SHIPMENT DELIVERY TIME</h4>
          <br />
          Orders will be processed and shipped at the next available business day.  Business days are between Monday (07:00 PST) - Friday (07:00 PST).  All Weekend orders (Friday after 07:00 PST, Saturday & Sunday) are processed first thing Monday morning at 07:00 PST.  This time frame usually results in your order being shipped within 1-3 business days after your full payment has been received. Shipment transit time will be between 2-7 business days depending on your physical address, accuracy of address information, availability of customers to answer questions (by contact number) from delivery personnel in the event of ambiguous shipping information, and/or any other unforseen circumstances.  We appreciate your understanding.
          <br />
          <br />
          <h4>QUANTITY RESTRICTIONS</h4>
          <br />
          Japanese Ministry of Health, Labour & Wellfare have passed regulations on Nicotine e-juice imports.  A person(s) can import up to a maximum of 120 milliliters into the country at any one time, per person, per address, per month.  You can find more information at their website here: <a target="_blank" className="required" href="http://www.mhlw.go.jp/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/dl/kojinyunyu151130-04.pdf" rel="noopener noreferrer">Japanese Ministry of Health, Labour & Wellfare</a>.
          <br />
          <br />
          <h4>CODs</h4>
          <br />
          We do not Accept {'COD\'s'} ({'"Cash On Delivery"'}).
          <br />
          <br />
          <h4>IN A HURRY?</h4>
          <br />
          We offer priority handling and delivery on most items upon request. For special instructions, PLEASE ORDER BY PHONE.
          <br />
          <br />
          <h4>SALES TAX</h4>
          <br />
          We collect an exclusive sales tax when you place your order in compliance with tax requirements for the state of Washington. All shipments to Japan are subject to Washington State Sales Tax.
          <br />
          <br />
          <h4>CUSTOMER SERVICE</h4>
          <br />
          Our helpful customer service department is committed to assist you in every way. If you have a question or problem with your order, please call 1-855-587-8888 for Customer Service, Monday–Friday, 8am – 5pm (UTC +9). Or email us at support@vapeswitch.com 24 hours a day, 7 days a week. Special requests or adjustments need to be arranged with our Customer Service department before your order has shipped.
        </p>
      </div>
    </div>
  );
}
