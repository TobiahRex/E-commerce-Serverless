import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function NicotineDisclaimer() {
  return (
    <div className="nicotine-disclaimer__main">
      <div className="main__breadcrumb--container">
        <ul className="breadcrumb--list">
          <li className="list--home">
            <Link to="/">
              Home
              <FontAwesome className="breadcrumb-chevron-right" name="angle-right" />
            </Link>
          </li>
          <li className="list--path last">
            Nicotine Disclaimer
          </li>
        </ul>
      </div>
      <div className="main__title">
        <h1>Nicotine Disclaimer</h1>
      </div>
      <div className="main__body">
        <p>
          <span className="required">WARNING: </span> Products sold by Nic Juice To Japan (NJ2JP) contains nicotine, a chemical known to the state of Washington to cause birth defects or other reproductive harm. Nic Juice To Japan (NJ2JP) products are intended for use by smokers 18 years of age or older (21 where applicable). You must be of legal smoking age in your area to purchase and/or use our products. Products sold by Nic Juice To Japan (NJ2JP) are not intended for use by children, women who are pregnant or breast feeding, or by those who are at risk of heart disease, high blood pressure, diabetes, or are taking medication for depression or asthma. Do not use these products if you are sensitive or allergic to nicotine or the additive propylene glycol. This product is sold for recreational use only. Products sold by Nic Juice To Japan (NJ2JP) are not intended to diagnose, treat or prevent any condition, disorder, disease or other conditions are not a smoking cessation method and have not tested as such. Nicotine is extremely addictive and habit forming. Keep out of reach of children and pets. Products within this site have not been evaluated by the US Food and Drug Administration (FDA) or any international health organization.
        </p>
      </div>
    </div>
  );
}
