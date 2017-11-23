class ReactWebflow {
  constructor() {
    this.state = {
      firstFire: false,
      secondFire: false,
    };
  }

  setStateWebflow = (param, cb) => {
    if (typeof param === 'function') {
      this.state = param(this.state);
      if (cb && typeof cb === 'function') {
        cb();
        return true;
      } else if (cb && typeof cb !== 'function') {
        throw new Error('When calling "setStateWebflow" with a first argument function, the optional second argument, must also be a function.');
      }
      return true;
    } else if (param && typeof param === 'object') {
      this.state = {
        ...this.state,
        ...param,
      };
      return true;
    }

    throw new Error('You must pass a function or an object as the first argument when calling "setStateWebflow".');
  }

  callAnimations = () => {
    if (!this.state.firstFire) {
      this.setStateWebflow(prevState => ({
        ...prevState,
        firstFire: true,
      }), () => {
        this.fireAnimations1();
      });
      return true;
    }
    return false;
  }

  fireAnimations1 = () => {
    console.log('hi toby');
    /*
    Webflow.require('ix').init([
      {
        slug: 'product-page-4-bottles-banner',
        name: 'Product Page 4 Bottles Banner',
        value: {
          style: { opacity: 0 },
          triggers: [
            {
              type: 'click',
              selector: '.product-page__4-bottles-modal',
              stepsA: [{ display: 'flex' }, { opacity: 1, transition: 'opacity 400ms ease 0' }],
              stepsB: [],
            },
            {
              type: 'load',
              stepsA: [{ wait: '1500ms' }, { opacity: 1, transition: 'opacity 800ms ease 0' }],
              stepsB: [],
            },
          ],
        },
      },
      {
        slug: 'product-page-new-member-banner',
        name: 'Product Page New Member Banner',
        value: {
          style: {},
          triggers: [
            {
              type: 'hover',
              selector: '.banner-container__alt',
              preserve3d: true,
              stepsA: [
                {
                  opacity: 1,
                  transition: 'transform 300ms ease 0, opacity 300ms ease 0',
                  x: '0px',
                  y: '0px',
                  z: '0px',
                },
              ],
              stepsB: [
                {
                  opacity: 0,
                  transition: 'transform 200 ease 0, opacity 200 ease 0',
                  x: '-350px',
                  y: '0px',
                  z: '0px',
                },
              ],
            },
            {
              type: 'hover',
              selector: '.banner-container__banner-text--alt',
              stepsA: [{ wait: '100ms' }, { opacity: 1, transition: 'opacity 200ms ease 0' }],
              stepsB: [{ opacity: 0, transition: 'opacity 300ms ease 0' }],
            },
            {
              type: 'click',
              selector: '.product-page__member-modal',
              stepsA: [{ display: 'flex' }, { opacity: 1, transition: 'opacity 400ms ease 0' }],
              stepsB: [],
            },
          ],
        },
      },
      {
        slug: 'product-page-close-new-member-modal',
        name: 'Product Page Close New Member Modal',
        value: {
          style: {},
          triggers: [
            {
              type: 'click',
              selector: '.product-page__member-modal',
              stepsA: [{ opacity: 0, transition: 'opacity 400ms ease 0' }, { display: 'none' }],
              stepsB: [],
            },
          ],
        },
      },
      {
        slug: 'product-page-close-4-bottles-modal',
        name: 'Product Page Close 4 Bottles Modal',
        value: {
          style: {},
          triggers: [
            {
              type: 'click',
              selector: '.product-page__4-bottles-modal',
              stepsA: [{ opacity: 0, transition: 'opacity 400ms ease 0' }, { display: 'none' }],
              stepsB: [],
            },
          ],
        },
      },
      {
        slug: 'product-page-exit-button-hover',
        name: 'Product Page Exit Button Hover',
        value: {
          style: {},
          triggers: [
            {
              type: 'hover',
              selector: '.exit-btn__alt',
              stepsA: [{ opacity: 0, transition: 'opacity 1000ms ease 0' }],
              stepsB: [{ opacity: 1, transition: 'opacity 1000ms ease 0' }],
            },
          ],
        },
      },
      {
        slug: 'product-page-action-button-hover',
        name: 'Product Page Action Button Hover',
        value: {
          style: {},
          triggers: [
            {
              type: 'hover',
              selector: '.action-btn__alt',
              preserve3d: true,
              stepsA: [
                {
                  opacity: 0,
                  transition: 'transform 500ms ease 0, opacity 450ms ease 0',
                  x: '250px',
                  y: '0px',
                  z: '0px',
                },
              ],
              stepsB: [
                {
                  opacity: 1,
                  transition: 'transform 500ms ease 0, opacity 450ms ease 0',
                  x: '0px',
                  y: '0px',
                  z: '0px',
                },
              ],
            },
          ],
        },
      },
      {
        slug: 'product-page-action-button-hover-2',
        name: 'Product Page Action Button Hover 2',
        value: {
          style: {},
          triggers: [
            {
              type: 'hover',
              selector: '.action-btn__alt-2',
              preserve3d: true,
              stepsA: [
                {
                  opacity: 0,
                  transition: 'transform 500ms ease 0, opacity 450ms ease 0',
                  x: '250px',
                  y: '0px',
                  z: '0px',
                },
              ],
              stepsB: [
                {
                  opacity: 1,
                  transition: 'transform 500ms ease 0, opacity 450ms ease 0',
                  x: '0px',
                  y: '0px',
                  z: '0px',
                },
              ],
            },
          ],
        },
      },
      {
        slug: 'product-page-cart-button-hover',
        name: 'Product Page Cart Button Hover ',
        value: {
          style: {},
          triggers: [
            {
              type: 'hover',
              selector: '.cart-button__alt',
              preserve3d: true,
              stepsA: [
                {
                  opacity: 0,
                  transition: 'transform 500ms ease 0, width 200 ease 0, opacity 450ms ease 0',
                  x: '150px',
                  y: '0px',
                  z: '0px',
                },
              ],
              stepsB: [
                {
                  opacity: 1,
                  transition: 'transform 500ms ease 0, opacity 450ms ease 0',
                  x: '0px',
                  y: '0px',
                  z: '0px',
                },
              ],
            },
          ],
        },
      },
      {
        slug: 'product-page-category-title-load',
        name: 'Product Page Category Title Load',
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
        slug: 'product-page-category-title-load-2',
        name: 'Product Page Category Title Load 2',
        value: {
          style: { opacity: 0 },
          triggers: [
            {
              type: 'load',
              stepsA: [{ wait: '200ms' }, { opacity: 1, transition: 'opacity 500ms ease 0' }],
              stepsB: [],
            },
          ],
        },
      },
      {
        slug: 'product-page-img-scroll',
        name: 'Product Page Img Scroll',
        value: {
          style: { opacity: 0, x: '-100px', y: '0px', z: '0px' },
          triggers: [
            {
              type: 'scroll',
              offsetBot: '5%',
              stepsA: [
                { wait: '400ms' },
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
        slug: 'product-page-title-scroll',
        name: 'Product Page Title Scroll',
        value: {
          style: { opacity: 0, x: '100px', y: '0px', z: '0px' },
          triggers: [
            {
              type: 'scroll',
              offsetBot: '1%',
              stepsA: [
                { wait: '400ms' },
                {
                  opacity: 1,
                  transition: 'opacity 500ms ease 0, transform 500ms ease 0',
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
        slug: 'product-page-blurb-scroll',
        name: 'Product Page Blurb Scroll ',
        value: {
          style: { opacity: 0, x: '100px', y: '0px', z: '0px' },
          triggers: [
            {
              type: 'scroll',
              offsetBot: '1%',
              stepsA: [
                { wait: '500ms' },
                {
                  opacity: 1,
                  transition: 'opacity 500ms ease 0, transform 500ms ease 0',
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
        slug: 'product-page-member-banner',
        name: 'Product Page Member Banner',
        value: {
          style: { opacity: 0, x: '100px', y: '0px', z: '0px' },
          triggers: [
            {
              type: 'scroll',
              offsetBot: '1%',
              stepsA: [
                { wait: '600ms' },
                {
                  opacity: 1,
                  transition: 'opacity 500ms ease 0, transform 500ms ease 0',
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
        slug: 'product-page-button-section',
        name: 'Product Page Button Section',
        value: {
          style: { opacity: 0, x: '100px', y: '0px', z: '0px' },
          triggers: [
            {
              type: 'scroll',
              offsetBot: '5%',
              stepsA: [
                { wait: '700ms' },
                {
                  opacity: 1,
                  transition: 'opacity 500ms ease 0, transform 500ms ease 0',
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
        slug: 'product-page-nicotine',
        name: 'Product Page Nicotine',
        value: {
          style: { opacity: 0, x: '100px', y: '0px', z: '0px' },
          triggers: [
            {
              type: 'scroll',
              offsetBot: '1%',
              stepsA: [
                { wait: '700ms' },
                {
                  opacity: 1,
                  transition: 'opacity 500ms ease 0, transform 500ms ease 0',
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
        slug: 'product-page-cart',
        name: 'Product Page Cart',
        value: {
          style: { opacity: 0, x: '100px', y: '0px', z: '0px' },
          triggers: [
            {
              type: 'scroll',
              offsetTop: '0%',
              offsetBot: '1%',
              stepsA: [
                { wait: '800ms' },
                {
                  opacity: 1,
                  transition: 'opacity 500ms ease 0, transform 500ms ease 0',
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
        slug: 'product-page-price-scroll',
        name: 'Product Page Price Scroll ',
        value: {
          style: { opacity: 0, scaleX: 0.8, scaleY: 0.8, scaleZ: 1 },
          triggers: [
            {
              type: 'scroll',
              offsetBot: '1%',
              stepsA: [
                { wait: '900ms' },
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
        slug: 'product-page-price-scroll-2',
        name: 'Product Page Price Scroll 2',
        value: {
          style: { opacity: 0, scaleX: 0.8, scaleY: 0.8, scaleZ: 1 },
          triggers: [
            {
              type: 'scroll',
              offsetBot: '1%',
              stepsA: [
                { wait: '1100ms' },
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
        slug: 'product-page-price-scroll-3',
        name: 'Product Page Price Scroll 3',
        value: {
          style: { opacity: 0, scaleX: 0.8, scaleY: 0.8, scaleZ: 1 },
          triggers: [
            {
              type: 'scroll',
              offsetBot: '1%',
              stepsA: [
                { wait: '1300ms' },
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
    */
  }
}

const myWebflow = new ReactWebflow();

const componentDidMount = () => {
  myWebflow.callAnimations();
};
console.log('componentDidMount', componentDidMount());
const componentWillUpdate = () => {
  myWebflow.callAnimations();
};
console.log('componentWillUpdate', componentWillUpdate());
