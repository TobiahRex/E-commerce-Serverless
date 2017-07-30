import React from 'react';
import FontAwesome from 'react-fontawesome';


export default function Loading() {
  return (
    <h3 className="checkout__loading">
      Calculating Final Total...
      <FontAwesome name="spinner" pulse size="2x" />
    </h3>
  );
}
