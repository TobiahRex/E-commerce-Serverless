import { gql } from 'react-apollo';

const GraphQLsubmitMessage = gql`
  mutation SubmitContactMsg(
    $message: String!
    $emailAddress: String!
    $ccUser: Boolean!
    $name: String!
    $recaptchaToken: String!
    $userId: String
  ) {
    SubmitContactMsg(
      message: $message
      emailAddress: $emailAddress
      ccUser: $ccUser
      name: $name
      recaptchaToken: $recaptchaToken
      userId: $userId
    ) {
      _id
      error {
        hard
        soft
        message
      }
      userId
      name
      name
      emailAddress
      message
      messageId
      created
    }
  }
`;

export default GraphQLsubmitMessage;
