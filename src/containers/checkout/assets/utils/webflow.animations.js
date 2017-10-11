export default () => {
  Webflow.require('ix').init([
    {
      slug: 'express-checkout-title-load',
      name: 'Express Checkout Title Load',
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
    { slug: 'new-interaction', name: 'New Interaction', value: { style: {}, triggers: [] } },
    {
      slug: 'express-checkout-modal-close',
      name: 'Express Checkout Modal Close',
      value: {
        style: {},
        triggers: [
          {
            type: 'click',
            selector: '.express-checkout__cvv-modal',
            stepsA: [
              { wait: '500ms', opacity: 0, transition: 'opacity 500ms ease 0' },
              { display: 'none' },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'express-checkout-show-modal',
      name: 'Express Checkout Show Modal',
      value: {
        style: {},
        triggers: [
          {
            type: 'click',
            selector: '.express-checkout__cvv-modal',
            stepsA: [{ display: 'flex' }, { opacity: 1, transition: 'opacity 500ms ease 0' }],
            stepsB: [],
          },
        ],
      },
    },
  ]);
};
