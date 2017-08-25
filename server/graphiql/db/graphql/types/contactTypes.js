import {
  GraphQLID as MongoId,
  GraphQLInt as IntType,
  GraphQLList as ListType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLEnumType as EnumType,
  GraphQLObjectType as ObjectType,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

import Contact from '../../mongo/models/contact';

const rootType = new ObjectType({
  name: 'Contact',
  description: 'Contact message made by customer.',
  fields: {
    _id: {
      description: 'The ID of the Contact.',
      type: new NonNull(MongoId),
    },
    user: {
      description: 'The ID of the User.',
      type: MongoId,
    },
    name: {
      description: 'name of the customer, enquiring for support.',
      type: new NonNull(StringType),
    },
    emailAddress: {
      description: 'email address of the enquiring customer.',
      type: new NonNull(StringType),
    },
    message: {
      description: 'Enquiry message submiited by the customer.',
      type: new NonNull(StringType),
    },
    messageId: {
      description: 'messageId of the SES email sent to support@nj2jp.com from the customer',
      type: new NonNull(MongoId),
    },
    created: {
      description: 'Date and Time of contact document creation',
      type: new NonNull(StringType),
    }
  },
});

const queries = {

};

const mutations = {
  SubmitSupport: {
    type: rootType,
    description: 'submit support message from user',
    args: {
      bccEmailAddresses: {
        description: 'Array: blind carbon copy recipients.',
        type: new ListType(StringType)
      },
      ccEmailAddresses: {
        description: 'Array: carbon copy recipients.',
        type: new ListType(StringType)
      },
      toEmailAddresses: {
        description: 'Array: mail recipients.',
        type: new NonNull(new ListType(StringType))
      },
      sourceEmail: {
        description: 'source mailId of the customer. In this case, it will be customer@nj2jp.com. SES requires a verified mailId from which we can send mail',
        type: new NonNull(StringType)
      },
      replyToAddresses: {
        description: 'Array: customer mailId, which allows the received support mail to reply back',
        type: new NonNull(new ListType(StringType))
      },
      bodyTextData: {
        description: 'the message the customer gives for the support',
        type: new NonNull(StringType)
      },
      bodyTextCharset: {
        description: 'The charset of the customer message',
        type: new NonNull(StringType)
      },
      subjectData: {
        description: 'Subject of the support message',
        type: new NonNull(StringType)
      },
      subjectCharset: {
        description: 'charset of the message',
        type: new NonNull(StringType)
      },
      name: {
        description: 'Name of the customer',
        type: new NonNull(StringType)
      },
    },
    resolve: (_, args) => Contact.sendSupportMailAndNotifySlack(args),
  },
}

export default {
  rootType,
  queries,
  mutations,
};
