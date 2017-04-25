import React from 'react';
import { browserHistory } from 'react-router';

export default function Promotion() {
  return (
    <div className="desc__promotion">
      <button
        className="sweep-right"
        onClick={() => browserHistory.push('/register')}
      >New members get 10% off their first order</button>
    </div>
  );
}
