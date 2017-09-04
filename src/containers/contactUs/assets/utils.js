export WebflowJs from '../../../webflow/webflow.javascript.js';
export const inputData = [{
  component: 'InputWithLabel',
  props: {
    type: 'name',
    containerInfo: {
      className: 'name__container',
    },
    labelInfo: {
      className: 'name__label',
      htmlFor: 'name',
      label: 'Name',
    },
    inputInfo: {
      className: 'name__input w-input',
      dataName: 'Name',
      id: 'name',
      name: 'name',
      placeholder: 'Enter your name',
      type: 'text',
    },
  },
}, {
  component: 'InputWithLabel',
  props: {
    type: 'email',
    containerInfo: {
      className: 'email__container',
    },
    labelInfo: {
      className: 'email__label',
      htmlFor: 'email',
      label: 'Email',
    },
    inputInfo: {
      className: 'email__input w-input',
      dataName: 'Email',
      id: 'email',
      name: 'emailAddress',
      placeholder: 'Enter your Email address',
      type: 'email',
    },
  },
}];
