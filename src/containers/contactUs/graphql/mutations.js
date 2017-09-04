import { gql } from 'react-apollo';

const GraphQLsubmitMessage = gql`
  mutation SubmitContactMsg(
    $message: String!
    $emailAddress: String!
    $ccUser: Bool!
    $name: String!
    $userId: String
  ) {
    SubmitContactMsg(
      message: $message
      emailAddress: $emailAddress
      ccUser: $ccUser
      name: $name
      userId: $userId
    )
    _id
    userId
    name
    name
    emailAddress
    message
    messageId
    created
  }
`;

export default GraphQLsubmitMessage;
