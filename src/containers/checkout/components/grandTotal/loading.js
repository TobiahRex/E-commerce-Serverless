import React from 'react';
import FontAwesome from 'react-fontawesome';


export default function Loading() {
  return (
    <h1 className="main__loading">
      <FontAwesome name="spinner" pulse size="3x" />
      <br />
      Loading...
    </h1>
  );
}
