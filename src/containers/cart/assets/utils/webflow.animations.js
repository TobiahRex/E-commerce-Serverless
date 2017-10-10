export default () => {
  Webflow.require('ix').init([
    {
      slug: 'shopping-cart-title-load',
      name: 'Shopping Cart Title Load',
      value: {
        style: { opacity: 0 },
        triggers: [
          {
            type: 'load',
            stepsA: [{ opacity: 1, transition: 'opacity 500ms ease 0' }],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'shopping-cart-top-row-load',
      name: 'Shopping Cart Top Row Load',
      value: {
        style: { opacity: 0, scaleX: 0.8, scaleY: 0.8, scaleZ: 1 },
        triggers: [
          {
            type: 'load',
            stepsA: [
              { wait: '300ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'shopping-cart-top-row-load-2',
      name: 'Shopping Cart Top Row Load 2',
      value: {
        style: { opacity: 0, scaleX: 0.8, scaleY: 0.8, scaleZ: 1 },
        triggers: [
          {
            type: 'load',
            stepsA: [
              { wait: '400ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'shopping-cart-top-row-load-3',
      name: 'Shopping Cart Top Row Load 3',
      value: {
        style: { opacity: 0, scaleX: 0.8, scaleY: 0.8, scaleZ: 1 },
        triggers: [
          {
            type: 'load',
            stepsA: [
              { wait: '500ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'shopping-cart-top-row-load-4',
      name: 'Shopping Cart Top Row Load 4',
      value: {
        style: { opacity: 0, scaleX: 0.8, scaleY: 0.8, scaleZ: 1 },
        triggers: [
          {
            type: 'load',
            stepsA: [
              { wait: '600ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'shopping-list-line-item-slide',
      name: 'Shopping List Line Item Slide',
      value: {
        style: { opacity: 0, x: '100px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            offsetBot: '5%',
            stepsA: [
              { wait: '1000ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'shopping-cart-product-list-fade',
      name: 'Shopping Cart Product List Fade',
      value: {
        style: { opacity: 0 },
        triggers: [
          {
            type: 'load',
            stepsA: [{ wait: '800ms' }, { opacity: 1, transition: 'opacity 500ms ease 0' }],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'shopping-cart-clear-btn',
      name: 'Shopping Cart Clear Btn',
      value: {
        style: { opacity: 0, scaleX: 0.8, scaleY: 0.8, scaleZ: 1 },
        triggers: [
          {
            type: 'load',
            offsetBot: '5%',
            stepsA: [
              { wait: '1200ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'shopping-cart-total',
      name: 'Shopping Cart Total',
      value: {
        style: { opacity: 0 },
        triggers: [
          {
            type: 'load',
            offsetBot: '5%',
            stepsA: [
              { wait: '1400ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'shopping-cart-action-btn',
      name: 'Shopping Cart Action Btn',
      value: {
        style: { opacity: 0, scaleX: 0.8, scaleY: 0.8, scaleZ: 1 },
        triggers: [
          {
            type: 'load',
            offsetBot: '5%',
            stepsA: [
              { wait: '1600ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
  ]);
};
