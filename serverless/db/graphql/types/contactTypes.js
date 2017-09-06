import {
  GraphQLID as MongoId,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

const rootType = new ObjectType({
  name: 'Contact',
  description: 'Contact message made by customer.',
  fields: {
    _id: {
      description: 'The ID of the Contact.',
      type: MongoId,
    },
    userId: {
      description: 'The ID of the User.',
      type: MongoId,
    },
    name: {
      description: 'name of the customer, enquiring for support.',
      type: StringType,
    },
    emailAddress: {
      description: 'email address of the enquiring customer.',
      type: StringType,
    },
    message: {
      description: 'Enquiry message submiited by the customer.',
      type: StringType,
    },
    messageId: {
      description: 'messageId of the SES email sent to support@nj2jp.com from the customer',
      type: MongoId,
    },
    created: {
      description: 'Date and Time of contact document creation',
      type: StringType,
    },
  },
});

const queries = {

};

const mutations = {
  SubmitSupport: {
    type: rootType,
    description: 'submit support message from user',
    args: {
      message: {
        description: 'the message, the customer gives for the support',
        type: new NonNull(StringType),
      },
      emailAddress: {
        description: 'The email Address of the customer',
        type: new NonNull(StringType),
      },
      ccUser: {
        description: 'Whether to CC the customer message',
        type: new NonNull(BoolType),
      },
      name: {
        description: 'Name of the customer',
        type: new NonNull(StringType),
      },
      recaptchaToken: {
        description: 'The Token received by Recaptcha API for human request detection.',
        type: new NonNull(StringType),
      },
      userId: {
        description: 'userId of the customer',
        type: StringType,
      },
    },
    resolve: (_, args, { Contact, Email }) => Contact.sendSupportMailAndNotifySlack(args, Email),
  },
};

export default {
  rootType,
  queries,
  mutations,
};
