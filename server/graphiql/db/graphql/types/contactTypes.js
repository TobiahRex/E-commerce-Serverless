import {
  GraphQLID as MongoId,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import Contact from '../../mongo/models/contact';

const rootType = new ObjectType({
  name: 'Contact',
  description: 'Contact message made by customer.',
  fields: {
    _id: {
      description: 'The ID of the Contact.',
      type: MongoId,
    },
    error: {
      description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
      type: new ObjectType({
        name: 'ContactError',
        fields: () => ({
          hard: {
            description: 'Boolean flag for a hard failure. Operations should not continue until action by user has been taken.',
            type: BoolType,
          },
          soft: {
            description: 'Boolean flag for a soft failure.  Operations should be allowed to continue.',
            type: BoolType,
          },
          message: {
            description: 'Amplifying information about error.  Should be written for user readibility.',
            type: StringType,
          },
        }),
      }),
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
  SubmitContactMsg: {
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
        description: 'The recaptcha token for sending a contact us message.',
        type: new NonNull(StringType),
      },
      userId: {
        description: 'userId of the customer',
        type: StringType,
      },
    },
    resolve: (_, args) => Contact.sendSupportMailAndNotifySlack(args),
  },
};

export default {
  rootType,
  queries,
  mutations,
};
