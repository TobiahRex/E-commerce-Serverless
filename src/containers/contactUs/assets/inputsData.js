const inputData = [{
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
      name: 'email',
      placeholder: 'Enter your Email address',
      type: 'email',
    },
  },
},
{
  component: 'TextAreaWithLabel',
  props: {
    className: 'message__input w-input',
    dataName: 'message field',
    id: 'message-field',
    maxLength: '5000',
    name: 'message-field',
    placeholder: 'What would you like to say to us?',
    required: 'required',
    resize: 'vertical"',
  },
},
{
  element: 'label',
  className: 'email__label',
  htmlFor: 'email',
  label: 'Email Address',
},
{
  element: 'input',
  className: 'Name__input w-input',
  dataname: 'Email',
  id: 'email',
  name: 'email',
  placeholder: 'Enter your email',
  type: 'email',
}];
export default inputData;
