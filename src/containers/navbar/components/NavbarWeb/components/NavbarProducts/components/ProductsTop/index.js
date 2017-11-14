import React from 'react';
import {
  ProductTopHdr,
  MissionStatement,
} from './components';

export default function ProductsTop() {
  return (
    <div className="floating-juice-container__top-section">
      <ProductTopHdr />
      <MissionStatement />
    </div>
  );
}
